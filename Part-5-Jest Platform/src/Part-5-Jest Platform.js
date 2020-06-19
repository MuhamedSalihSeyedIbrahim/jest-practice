//git changer file getter or make stand alone for latest feature from git of jest
const { getChangedFilesForRoots } = require("jest-changed-files");

// print the set of modified files since last commit in the current repo
getChangedFilesForRoots(["./"], {
  lastCommit: true,
}).then((result) => console.log(result.changedFiles));

//obj comparetor
const diff = require("jest-diff").default;

const a = { a: { b: { c: 5 } } };
const b = { a: { b: { c: 6 } } };

let result = diff(a, b);

// print diff
console.log(result);

//comment parser
const { parseWithComments } = require("jest-docblock");

const code = `
/**
 * This is a sample
 *
 * @flow
 */

 console.log('Hello World!');
`;

const parsed = parseWithComments(code);

// prints an object with two attributes: comments and pragmas.
console.log(parsed);

const getType = require("jest-get-type");

const array = [1, 2, 3];
const nullValue = null;
const undefinedValue = undefined;

// prints 'array'
console.log(getType(array));
// prints 'null'
console.log(getType(nullValue));
// prints 'undefined'
console.log(getType(undefinedValue));

const { validate } = require("jest-validate");

const configByUser = {
  transform: "<rootDir>/node_modules/my-custom-transform",
};

result = validate(configByUser, {
  comment: "  Documentation: http://custom-docs.com",
  exampleConfig: { transform: "<rootDir>/node_modules/babel-jest" },
});

console.log(result);

/* 
// heavy-task.js
// will not execute due to node note support native worker object
module.exports = {
  myHeavyTask: (args) => {
    console.log("Heavy Task .js worker");
  },
};
// main.js

async function main() {
  const worker = new Worker(require.resolve("./heavy-task.js"));

  // run 2 tasks in parallel with different arguments
  const results = await Promise.all([
    worker.myHeavyTask({ foo: "bar" }),
    worker.myHeavyTask({ bar: "foo" }),
  ]);

  console.log(results);
}

main(); */

//pretty printer / formatter
const prettyFormat = require("pretty-format");

const val = { object: {} };
val.circularReference = val;
val[Symbol("foo")] = "foo";
val.map = new Map([["prop", "value"]]);
val.array = [-0, Infinity, NaN];

console.log(prettyFormat(val));
