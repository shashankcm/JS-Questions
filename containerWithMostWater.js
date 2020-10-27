/*
https://leetcode.com/problems/container-with-most-water/
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
*/

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
  let i = 0, j = height.length - 1, max = 0, area;
  
  while(i < j) {
      area = (j - i) * Math.min(height[i], height[j]);
      max = Math.max(area, max);
      
      height[i] > height[j] ? j-- : i++
  }
  
  return max;
};
