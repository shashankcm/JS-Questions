let arr = [7,15,9, 10, 2, 1, 5, 2, 6, 11, 6], target = 12;

function twoSum(arr, target) {
    let res = [];
    let indexes = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (target === arr[i] + arr[j] && !indexes.includes(i) && !indexes.includes(j)) {
                res.push([arr[i], arr[j]]);
                indexes.push(i);
                indexes.push(j);
            } 
            
        }
    }
    return res;
}

console.log(twoSum(arr, target))