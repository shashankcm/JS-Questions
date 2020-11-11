/*
  array = [1,2,3,4,5,6,7,8,9,10] 
  i = 1, output = [1]
  i = 2, 2+3 
  output = [1, 5]
  i = 3, 4+5+6
  output = [1, 5, 15] and so on...
  otuput = [ 1, 5, 15, 34 ]
*/

let arr = [1,2,3,4,5,6,7,8,9,10 ]
let sumArr = [], sampleArray = [], totArray = []
let currentIndex = 0

for(let i = 0; i < arr.length; i++) {
  currentIndex = i + 1
  if(currentIndex === 1) {
    sampleArray = arr.splice(0, 1)
    sumArr.push(sampleArray)
  } else {
    sampleArray = arr.splice(0, currentIndex)
    sumArr.push(sampleArray)
  }
}

function totSum(initialArr) {
  let singleSum = initialArr.reduce((a,b) => a+b, 0)
  totArray.push(singleSum)
}

sumArr.map(totSum)

console.log(totArray )