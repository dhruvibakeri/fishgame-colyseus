
const LosslessJSON = require('lossless-json');

// each string in lines represents a line from STDIN
// outputs a string with two lines:
// 1st: { count: # of JSON values, seq: array of JSON values }
// 2nd: Array with total values followed by values in reverse
export function xjson(lines: string[]): string {
    const jsons: JSON[] = stringToJSONS(lines.join("\n"));
    return LosslessJSON.stringify({ count: jsons.length, seq: jsons })
        + "\n"
        + LosslessJSON.stringify([jsons.length, ...jsons.reverse()]);
}

// string -> JSON[]
// Converts a string containing a sequence
// of valid JSON representation to JSON[]
export function stringToJSONS(jsonSeqStr: string): JSON[] {
    if (jsonSeqStr.trim().length === 0) {
        return [];
    } else {
        try {
            // Note to the reader: we're checking for error messages
            // from JSON.parse so first, we try to parse using that!
            JSON.parse(jsonSeqStr)
            return [LosslessJSON.parse(jsonSeqStr)];
        } catch (error) {
            let splitIdx = getLastNumInStr(error.toString());
            const [lhs, rhs] = splitByIndex(jsonSeqStr, splitIdx);
            // TERMINATION ARGUMENT: splitByIndex splits the input 
            // into two parts, therefore recursive calls are on 
            // smaller inputs.
            return [...stringToJSONS(lhs), ...stringToJSONS(rhs)]
        }
    }
}

// get the last number in a string
// ASSUMPTION: a last number exists.
export function getLastNumInStr(str: string): number {
    return parseInt(str.match(/\d+(?=\D*$)/)[0])
}

// splits input at index into a pair
// ASSUMPTION: 0-indexed and index within input.
export function splitByIndex(input: string, index: number): [string, string] {
    return [input.substr(0, index), input.substr(index)];
}


// Net module from node.js
const Net = require('net');

const args = process.argv.slice(2)

// default port
let port = 4567

// change port to the one specified 
if (args.length == 1) {
    port = parseInt(args[0]);
}

// there can be max 1 argument
if (args.length > 1) {
    process.stdout.write(`cannot enter more than 1 argument\n`);
    process.exit()
}

// this creates a new server
const server = new Net.Server();


// starts listening for connections/ waiting for a client to connect
server.listen(port, () => {
    setTimeout(noConnection, 3000);
});

function noConnection() {
    server.getConnections(function (error: any, count: any) {
        if (count == 0) {
            throw Error('Wait time > 3 seconds')
        }

    });
}

// When a client requests a connection with the server, the server creates a new
// socket dedicated to that client.

// when a client wants to connect to the server, it creates a socket
// for that client
// passed to the listeners of a 'connection' event emitted on a net.Server,
// so the user can use it to interact with the client.
server.on('connection', (socket: any) => {

    let strArray: string[] = []

    // when the event 'data' is received,
    // server can read the data from its client
    socket.on('data', (jsondata: any) => {
        strArray = jsondata.toString().split("\n")
        // console.log(`Data received from client: ${jsondata.toString()}`);
        // console.log(strArray)
        socket.write(xjson(strArray))
    });

    // when the client sends a FIN packet, the readable side is closed
    // the socket will by default send a FIN packet back,
    // unless  (allowHalfOpen is true) and end the connection
    socket.on('end', () => {
        //console.log('Terminating connection with the client');
    });

    socket.on('error', (err: any) => {
        server.close();
    });

    // server shuts off after sending client the message
    server.close(() => {
        process.exit();
    });

});