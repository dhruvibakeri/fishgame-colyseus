const fs = require('fs');

function main() {
  const size = parseInt(process.argv.slice(2), 10)
  if (isNaN(size) || size < 0) {
    process.stdout.write(`usage: ./xgui positive-integer\n`);
  } else {
    fs.unlink("./Other/hex-config.js", (_) => {})
    fs.writeFileSync("./Other/hex-config.js", `const size = ${size}`);
    require("child_process")
      .exec((process.platform === "darwin" ? "open" : "google-chrome") + " ./Other/index.html");
  }
}

main();