const readline = require('readline');

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

function parseJSON(lines) {
  return JSON.parse(lines.join("\n"))
}

main();