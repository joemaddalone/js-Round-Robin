const robiner = require("./dist/robiner");
const red = "\x1b[31m%s\x1b[0m";
const green = "\x1b[32m%s\x1b[0m";

function assert(outcome, description) {
  return outcome
    ? console.log(green, "PASS", description)
    : console.log(red, "FAIL", description);
}

const r1 = robiner(3);
assert(r1.length === 6, "contains the correct number of things");
assert(
  r1.filter(({ a, b }) => a === 1 || b == 1).length === 3,
  "contains all matches including byes"
);
