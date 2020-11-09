var fs = require('fs');
// extracts all in /out from milestone-3-test-fest.
// and adds them to a key - value - store where key is filename
// EFFECT: reads all files in dirName
function readFestWriteTest(dirName) {
    var files = fs.readdirSync(__dirname + ("/" + dirName + "/"));
    var res = "";
    files.forEach(function (file) {
        var contents = fs.readFileSync(__dirname + ("/" + dirName + "/") + file, 'utf8');
        var name = file.substring(0, file.length - 5).replace("-", "_");
        res = res + "\nconst ex" + name + " = " + JSON.stringify(JSON.parse(contents));
    });
    fs.writeFile("../tests/" + dirName + "-tests.spec.ts", res, function (err) {
        if (err)
            throw err;
    });
}
readFestWriteTest("milestone-6-test-fest");
