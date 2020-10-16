//  -> 
// Compiles all the lines from
// STDIN and sends to `xjson`
function main() {
  let lines = []
  let readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });
  readLine.on('line', l => lines.push(l));
  readLine.on('close', () => {
      console.log(parseJSON(lines));
  });
}

// String[] -> Number
// put the lines together, parse, and compute the reachable states
function parseJSON(lines) {
  return getTotalReachableFromBoardPosn(JSON.parse(lines.join("\n")));
}