function reverseInParentheses(inputString) {
  while (inputString.includes("(")) {
    inputString = inputString.replace(/\(([^()]*)\)/, (_, str) =>
      [...str].reverse().join("")
    );
  }
  return inputString;
}

console.log(reverseInParentheses("foo(bar)lou"));

//Solution - 2

function reverseString(str) {
  let o = "";
  for (let i = str.length - 1; i >= 0; i--) o += str.charAt(i);
  return o;
}

function reverseInParentheses(inputString) {
  let reg = /\(\w*\)/;
  if (!reg.test(inputString)) return inputString;
  let str = reg.exec(inputString)[0],
    revStr = reverseString(str.substr(1, str.length - 2));
  return reverseInParentheses(inputString.replace(str, revStr));
}

//Solution-3

function reverseInParentheses(s) {
  while (true) {
    let c = s.indexOf(")");

    if (c === -1) {
      break;
    }

    let o = s.substring(0, c).lastIndexOf("(");

    let start = s.substring(0, o);
    let middle = s
      .substring(o + 1, c)
      .split("")
      .reverse()
      .join("");
    let end = s.substring(c + 1, s.length);

    s = start + middle + end;
  }

  return s;
}

//Solution -4
function reverseInParentheses(inputString) {
  var s = inputString;

  while (s.indexOf(")", 0) != -1) {
    var c = s.indexOf(")", 0);
    var a = s.lastIndexOf("(", c);
    var b = s
      .slice(a + 1, c)
      .split("")
      .reverse()
      .join("");
    s = s.slice(0, a) + b + s.slice(c + 1);

    console.log(c, a, b, s);
  }
  return s;
}
