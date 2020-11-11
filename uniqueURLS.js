let urls =
["https://stackoverflow.com/questions/15052702/count-unique-elements-in-array-without-sorting", 
  "https://mail.google.com/mail/u/1/#inbox", 
  "https://mail.google.com/mail/u/0/#inbox", 
  "https://www.amazon.com/HP-5055-Wireless-Printer-Re…ix=Best%2BAll%2Bin%2Bone%2Caps%2C202&sr=8-16&th=1"
]

/*
function getHostName(url) {
  return url.replace(/^(.*\/\/[^\/?#]*).*$/,"$1");
}
*/


function getHostName(url) {
  let newUrl = new URL(url), hostName = newUrl.hostname, protocol = newUrl.protocol
  return `${protocol}${hostName}`;
}

urls = urls.map(getHostName)

// Method - 1 -- count total unique values

console.log(new Set(urls).size)

// Method - 2 -- count each existance

let count = urls.reduce((acc, val) => {
  acc[val] === undefined ? acc[val] = 1 : acc[val] += 1;
  return acc
}
,{})

console.log(count)
console.log('Time complexity of reduce, map is O(n) where n is the length of an Array.')

// https://dev.to/lukocastillo/time-complexity-big-0-for-javascript-array-methods-and-examples-mlg
// https://stackoverflow.com/questions/1368264/how-to-extract-the-hostname-portion-of-a-url-in-javascript
// https://dmitripavlutin.com/parse-url-javascript/


