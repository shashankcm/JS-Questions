/*
  Input nums1 = [1,2,2,1], nums2 = [2,2]
  Output: [2] OR [2,2]
*/

function intersectionOfTwoArrays(arr1, arr2) {
  let outputArr = arr1.filter(a1 => arr2.indexOf(a1) !== -1)
  // remove duplicates --> return [...new Set(outputArr)]
  return outputArr;
}
let nums1 = [1,2,2,1], nums2 = [2,2];
console.log(intersectionOfTwoArrays(nums1, nums2))