// [12,3,2,1,7,6].getEvenAndSort()

Array.prototype.getEvenAndSort = function() {
  let len = this.length
  let returnArray = []
  let i = 0;
  
  let sortedEvenArray = this.sort((a, b) => a > b ? 1 :-1).filter(ele => ele%2===0 )
  
  return sortedEvenArray
} 

let x = [12,3,2,1,7,6].getEvenAndSort()
console.log(x)