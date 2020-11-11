function findDisappearedNumber(nums) {
  let missing = [];
  let seen = new Array(nums.length).fill(false);
  
  for (let i = 0; i < nums.length; i++) {
        seen[nums[i]-1] = true;
    };
    
  for( let i = 0; i < seen.length; i++) {
    if(!seen[i]){
      missing.push(i+1)
    }
    
  }
    return missing;
}

console.log(findDisappearedNumber([1,2, 2, 5, 6, 9]))