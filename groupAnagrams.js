let strs = ["eat","tea","tan","ate","nat","bat"];

/* 
function groupAnagrams() {
  let hash = {}

  strs.forEach(str => {
    let letters = str.split('').sort();
    hash[letters] ? hash[letters].push(str) : hash[letters] = [str]
  })
  
  return Object.values(hash)
}
*/


// Best Solution

var groupAnagrams = function(strs) {
    if (strs.length == 0) {
        return [[""]];
    }
    
    const anagrams = new Map();
    
    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        
        if (anagrams.has(sortedStr)) {
            anagrams.get(sortedStr).push(str);
        } else {
            anagrams.set(sortedStr, [str]);
        }
    }
    
    const results = []
    
    for (let strArrays of anagrams.values()) {
        results.push(strArrays);
    }
    
    return results;
};

console.log(groupAnagrams(strs))