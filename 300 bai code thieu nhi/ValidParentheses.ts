// Valid Parentheses

import { Stack } from "../agrothim/Stack";

const a = "{((){})}";

var isValid = function (s: string): boolean {
  while (true) {
    if (s.includes("()")) {
      s = s.replace("()", "");
    } else if (s.includes("{}")) {
      s = s.replace("{}", "");
    } else if (s.includes("[]")) {
      s = s.replace("[]", "");
    } else {
      return s.length > 0 ? false : true;
    }
  }
};

// Dung stack
var isValidStack = function (s: string): boolean {
  // thuật toán stack
  let stack = new Stack<string>([...s]);
  [...s].forEach((element) => {
    if (element == "(") {
      stack.push(")");
    } else if (element == "(") {
      stack.push(")");
    } else if (element == "(") {
      stack.push(")");
    } else if (stack.size() < 1 || stack.pop() !== element) {
      return false;
    }
  });
  return true;
};

console.log(isValidStack(a));
