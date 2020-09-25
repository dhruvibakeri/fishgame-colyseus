"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("./index");
const LosslessJSON = require('lossless-json');
// Note: Integration tests are in the intergration-tests folder and can be run 
// via the script: run-integration-tests
describe("tests for string to jsons", () => {
    it("test for two objects", () => {
        chai_1.assert.deepEqual(index_1.stringToJSONS('{}{}'), [LosslessJSON.parse('{}'), LosslessJSON.parse('{}')]);
    });
    it("test for two numbers sep by space", () => {
        chai_1.assert.deepEqual(index_1.stringToJSONS('1 2'), [LosslessJSON.parse("1"), LosslessJSON.parse("2")]);
    });
    it("test for two numbers sep by new line", () => {
        chai_1.assert.deepEqual(index_1.stringToJSONS('1\n2'), [LosslessJSON.parse("1"), LosslessJSON.parse("2")]);
    });
    it("test for two decimal numbers sep by space", () => {
        chai_1.assert.deepEqual(index_1.stringToJSONS('1.2 2.1'), [LosslessJSON.parse("1.2"), LosslessJSON.parse("2.1")]);
    });
    it("test for two decimal numbers sep by new line", () => {
        chai_1.assert.deepEqual(index_1.stringToJSONS('1.2\n2.1'), [LosslessJSON.parse("1.2"), LosslessJSON.parse("2.1")]);
    });
    it("just a number", () => {
        chai_1.assert.deepEqual(index_1.stringToJSONS('1'), [LosslessJSON.parse("1")]);
    });
    it("complex test", () => {
        chai_1.assert.deepEqual(index_1.stringToJSONS(`1
2
{ "2": 3}      {"2":"3"}
`), [
            LosslessJSON.parse("1"),
            LosslessJSON.parse("2"),
            LosslessJSON.parse(`{ "2": 3 }`),
            LosslessJSON.parse(`{ "2": "3" }`)
        ]);
    });
    it("more complex", () => {
        chai_1.assert.deepEqual(index_1.stringToJSONS(`
{"hVo>&F":{"qt9[":{"":-1175264919,"e'54 ":[{

          },198248312.8926773]}},"4)dk":"P,i"}1.23 4433[{"mQ4":"Ly*{,|"},"",{"(,.":[]},
    false]2.33 4.0{"G":-21140780,"":"+-Ll5(","WtrDujWs[":[false,-1612877892.6848078,-1936179433],
               "\`:>":"r,fPDhS|>"}{}
   
   
               {}[
   {"":{"5X7":[true,false,true],"":"*4w\`Q]A)","z2=":["",{
           "2ta":"QwQ:H6"}],



"pclC<T":false}}]
`), [
            LosslessJSON.parse(`{ "hVo>&F": { "qt9[": { "": -1175264919, "e'54 ": [{}, 198248312.8926773] } }, "4)dk": "P,i" }`),
            LosslessJSON.parse(`1.23`),
            LosslessJSON.parse(`4433`),
            LosslessJSON.parse(`[{ "mQ4": "Ly*{,|" }, "", { "(,.": [] }, false]`),
            LosslessJSON.parse(`2.33`),
            LosslessJSON.parse(`4.0`),
            LosslessJSON.parse(`{ "G": -21140780, "": "+-Ll5(", "WtrDujWs[": [false, -1612877892.6848078, -1936179433], "\`:>": "r,fPDhS|>" }`),
            LosslessJSON.parse(`{}`),
            LosslessJSON.parse(`{}`),
            LosslessJSON.parse(`[{ "": { "5X7": [true, false, true], "": "*4w\`Q]A)", "z2=": ["", { "2ta": "QwQ:H6" }], "pclC<T": false } }]`)
        ]);
    });
});
describe("get last number in a string", () => {
    it("just a 1 digit number", () => {
        chai_1.assert.deepEqual(index_1.getLastNumInStr("1"), 1);
    });
    it("2 digit number", () => {
        chai_1.assert.deepEqual(index_1.getLastNumInStr("12"), 12);
    });
    it("number in the end", () => {
        chai_1.assert.deepEqual(index_1.getLastNumInStr("hello 12"), 12);
    });
    it("number in the middle", () => {
        chai_1.assert.deepEqual(index_1.getLastNumInStr("bye 12 bye"), 12);
    });
    it("number first, word later", () => {
        chai_1.assert.deepEqual(index_1.getLastNumInStr("0 no"), 0);
    });
    it("many numbers", () => {
        chai_1.assert.deepEqual(index_1.getLastNumInStr("1 2 123"), 123);
    });
});
describe("split array by an index", () => {
    it("split a string of length one at 0", () => {
        chai_1.assert.deepEqual(index_1.splitByIndex("a", 0), ["", "a"]);
    });
    it("split a string of length one at 1", () => {
        chai_1.assert.deepEqual(index_1.splitByIndex("a", 1), ["a", ""]);
    });
    it("split a string of length 2 at 0", () => {
        chai_1.assert.deepEqual(index_1.splitByIndex("ab", 0), ["", "ab"]);
    });
    it("split a string of length 2 at 1", () => {
        chai_1.assert.deepEqual(index_1.splitByIndex("ab", 1), ["a", "b"]);
    });
    it("split a string of length 2 at 2", () => {
        chai_1.assert.deepEqual(index_1.splitByIndex("ab", 2), ["ab", ""]);
    });
});
describe("get final output by converting list of strings to json", () => {
    it("test for empty json objects", () => {
        chai_1.assert.deepEqual(index_1.xjson(["{}", "[]"]), "{\"count\":2,\"seq\":[{},[]]}\n[2,[],{}]");
    });
    it("test for single digit number seperated by a new line", () => {
        chai_1.assert.deepEqual(index_1.xjson(["1", "2", "3"]), "{\"count\":3,\"seq\":[1,2,3]}\n[3,3,2,1]");
    });
    it("test for single digit numbers seperated by a space", () => {
        chai_1.assert.deepEqual(index_1.xjson(["1 2 3"]), "{\"count\":3,\"seq\":[1,2,3]}\n[3,3,2,1]");
    });
    it("test for double digit numbers", () => {
        chai_1.assert.deepEqual(index_1.xjson(["12", "34", "54", "12 34 56"]), "{\"count\":6,\"seq\":[12,34,54,12,34,56]}\n[6,56,34,12,54,34,12]");
    });
    it("test for decimal and negative numbers", () => {
        chai_1.assert.deepEqual(index_1.xjson(["9.8", "-6", "5.1 8.3 -5"]), "{\"count\":5,\"seq\":[9.8,-6,5.1,8.3,-5]}\n[5,-5,8.3,5.1,-6,9.8]");
    });
    it("test for booleans", () => {
        chai_1.assert.deepEqual(index_1.xjson(["true", "false", "true false"]), "{\"count\":4,\"seq\":[true,false,true,false]}\n[4,false,true,false,true]");
    });
    it("test for a single string", () => {
        chai_1.assert.deepEqual(index_1.xjson(["\"a\" \"b\"", "\"c\""]), "{\"count\":3,\"seq\":[\"a\",\"b\",\"c\"]}\n[3,\"c\",\"b\",\"a\"]");
    });
    it("complex test", () => {
        chai_1.assert.deepEqual(index_1.xjson(["{ \"a\" : 123, \"b\" : 345, \"c\" : [5,6,7], \"d\" : { \"e\" : 987, \"f\" : \"hi\"}} true null",
            "[1,2,3][4,5]", "6.3 \"bye\""]), "{\"count\":7,\"seq\":[{\"a\":123,\"b\":345,\"c\":[5,6,7],\"d\":{\"e\":987,\"f\":\"hi\"}},true,null,[1,2,3],[4,5],6.3,\"bye\"]}\n[7,\"bye\",6.3,[4,5],[1,2,3],null,true,{\"a\":123,\"b\":345,\"c\":[5,6,7],\"d\":{\"e\":987,\"f\":\"hi\"}}]");
    });
});
//# sourceMappingURL=index.spec.js.map