const fs = require('fs');

// extracts all in /out from milestone-3-test-fest.
// and adds them to a key - value - store where key is filename
// EFFECT: reads all files in dirName
function readFestWriteTest(dirName: string): void {

  let files = fs.readdirSync(__dirname + `/${dirName}/`);
  let res = ""

  files.forEach(file => {
    var contents = fs.readFileSync(__dirname + `/${dirName}/` + file, 'utf8');
    let name = file.substring(0, file.length - 5).replace("-", "_")
    res = `${res}\nconst ex${name} = ${JSON.stringify(JSON.parse(contents))}`
  });

  fs.writeFile(`../tests/${dirName}-tests.spec.ts`, res, (err) => {
    if (err) throw err;
  })
}

readFestWriteTest("milestone-6-test-fest");
