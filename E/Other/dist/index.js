"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitByIndex = exports.getLastNumInStr = exports.stringToJSONS = exports.xjson = void 0;
var LosslessJSON = require('lossless-json');
// each string in lines represents a line from STDIN
// outputs a string with two lines:
// 1st: { count: # of JSON values, seq: array of JSON values }
// 2nd: Array with total values followed by values in reverse
function xjson(lines) {
    var jsons = stringToJSONS(lines.join("\n"));
    return LosslessJSON.stringify({ count: jsons.length, seq: jsons })
        + "\n"
        + LosslessJSON.stringify(__spreadArrays([jsons.length], jsons.reverse()));
}
exports.xjson = xjson;
// string -> JSON[]
// Converts a string containing a sequence
// of valid JSON representation to JSON[]
function stringToJSONS(jsonSeqStr) {
    if (jsonSeqStr.trim().length === 0) {
        return [];
    }
    else {
        try {
            // Note to the reader: we're checking for error messages
            // from JSON.parse so first, we try to parse using that!
            JSON.parse(jsonSeqStr);
            return [LosslessJSON.parse(jsonSeqStr)];
        }
        catch (error) {
            var splitIdx = getLastNumInStr(error.toString());
            var _a = splitByIndex(jsonSeqStr, splitIdx), lhs = _a[0], rhs = _a[1];
            // TERMINATION ARGUMENT: splitByIndex splits the input 
            // into two parts, therefore recursive calls are on 
            // smaller inputs.
            return __spreadArrays(stringToJSONS(lhs), stringToJSONS(rhs));
        }
    }
}
exports.stringToJSONS = stringToJSONS;
// get the last number in a string
// ASSUMPTION: a last number exists.
function getLastNumInStr(str) {
    return parseInt(str.match(/\d+(?=\D*$)/)[0]);
}
exports.getLastNumInStr = getLastNumInStr;
// splits input at index into a pair
// ASSUMPTION: 0-indexed and index within input.
function splitByIndex(input, index) {
    return [input.substr(0, index), input.substr(index)];
}
exports.splitByIndex = splitByIndex;
// Net module from node.js
var Net = require('net');
var args = process.argv.slice(2);
// default port
var port = 4567;
// change port to the one specified 
if (args.length == 1) {
    port = parseInt(args[0]);
}
// there can be max 1 argument
if (args.length > 1) {
    process.stdout.write("cannot enter more than 1 argument\n");
    process.exit();
}
// this creates a new server
var server = new Net.Server();
// starts listening for connections/ waiting for a client to connect
server.listen(port, function () {
    // console.log(`Server waiting on a connection localhost:${port}.`);
    setTimeout(noConnection, 3000);
});
function noConnection() {
    server.getConnections(function (error, count) {
        if (count == 0) {
            throw Error('Wait time > 3 seconds');
        }
    });
}
// When a client requests a connection with the server, the server creates a new
// socket dedicated to that client.
// when a client wants to connect to the server, it creates a socket
// for that client
// passed to the listeners of a 'connection' event emitted on a net.Server,
// so the user can use it to interact with the client.
server.on('connection', function (socket) {
    var strArray = [];
    // console.log('A new connection has been established.');
    // when the event 'data' is received,
    // server can read the data from its client
    socket.on('data', function (jsondata) {
        strArray = jsondata.toString().split("\n");
        // console.log(`Data received from client: ${jsondata.toString()}`);
        // console.log(strArray)
        socket.write(xjson(strArray));
    });
    // when the client sends a FIN packet, the readable side is closed
    // the socket will by default send a FIN packet back,
    // unless  (allowHalfOpen is true) and end the connection
    socket.on('end', function () {
        //console.log('Terminating connection with the client');
    });
    socket.on('error', function (err) {
        server.close();
    });
    // server shuts off after sending client the message
    server.close(function () {
        process.exit();
    });
});
//# sourceMappingURL=index.js.map