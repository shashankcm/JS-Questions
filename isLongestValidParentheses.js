/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let left = 0, right = 0, count = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === '(') {
            left += 1
        } else {
            right += 1
        }
        
        if(left === right) {
            count = Math.max(count, 2* right);
        } else if(right >= left) {
            left = right = 0;
        }
    }
    
    left = right = 0;
        for (let i = s.length - 1; i >= 0; i--) {
            if (s.charAt(i) == '(') {
                left++;
            } else {
                right++;
            }
            if (left == right) {
                count = Math.max(count, 2 * left);
            } else if (left >= right) {
                left = right = 0;
            }
        }
    
    return count
};
