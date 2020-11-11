// Solution 1 
/**
 * @param {string} s
 * @return {boolean}
 */


 
function isValid(str) {

  if (str.length <= 1)
    return false

  let matchingOpeningBracket, ch
  let stack = []

  let openingBrackets = ['[', '{', '(']
  let closingBrackets = [']', '}', ')']

  for (let i = 0; i < str.length; i++) {
    ch = str[i]

    if (closingBrackets.indexOf(ch) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
      if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
        return false
      }
    } else {
      stack.push(ch)
    }
  }

  return (stack.length == 0)
};

/*

// Solution 2  (Best Solution)

var isValid = function(s) {
    if (s.length === 1) return false
    
    const stack = []
    
    for (let i = 0; i < s.length; i++) {
        const bracket = s[i]
        
        if (isOpen(bracket))
            stack.push(bracket)
        else {
            if (!stack.length || !isMatched(stack[stack.length-1], bracket)) return false
            else
                stack.pop()
        }
    }
    
    return stack.length === 0
};

function isMatched(b1, b2) {
    return (
        (b1 === "(" && b2 === ")") ||
        (b1 === "[" && b2 === "]") ||
        (b1 === "{" && b2 === "}")
    )
}

function isOpen(b) {
    return b === "(" || b === "[" || b === "{"
}
    

function isClosed(b) {
    return b === "]" || b === ")" || b === "}"
}

*/
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("([)]"))
console.log(isValid("{[]}"))
console.log(isValid("([)]"))



// Another method:


let openBracket = ['{', '(', '['], closedBrackets =  ['}', ')', ']']
 
function checkIsValidString(str){
 let checkString = [...str],  brackets = [], bracketLen = brackets.length
  
 for(let i = 0; i < checkString.length; i++){
   let char = checkString[i];
   
   if(closedBrackets.indexOf(char) > -1) {
     let matchOpeningBracket = openBracket[closedBrackets.indexOf(char)]
       if(bracketLen === 0 || (brackets.pop() != matchOpeningBracket)) { 
         return false
       }
   } else {
       brackets.push(char)
   }
 }
  console.log(bracketLen, "Test")
  return (bracketLen === 0)
}

console.log(checkIsValidString("{[]}"))