function firstDuplicate(a) {
  let distanceCount = a.length,
    prevDC = a.length,
    nearNum = -1;
  for (let i = 0; i < a.length; i++) {
    let tempCount = 0;
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        if (j === 1) {
          nearNum = a[i];
          return nearNum;
        }
        if (j < prevDC && j < distanceCount) {
          nearNum = a[i];
          prevDC = j;
        }
      }
    }
  }
  return nearNum;
}

//Better Solutions:

function firstDuplicate(a) {
  var dictionary = {};

  for (var i = 0; i < a.length; i++) {
    if (dictionary[a[i]] !== undefined) return a[i];
    else dictionary[a[i]] = i;
  }

  return -1;
}

// If a number is found first time make a[abs(number) - 1] negative
// If a[abs(number) - 1] is negative it means number is found for second time
// return it.
function firstDuplicate(a) {
  for (var i = 0; i < a.length; i++) {
    var num = a[i];
    if (a[Math.abs(num) - 1] > 0) {
      a[Math.abs(num) - 1] = -1 * a[Math.abs(num) - 1];
    } else {
      return Math.abs(num);
    }
  }

  return -1;
}

function firstDuplicate(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[Math.abs(a[i]) - 1] < 0) return Math.abs(a[i]);
    a[Math.abs(a[i]) - 1] = -a[Math.abs(a[i]) - 1];
  }
  return -1;
}

firstDuplicate = (a) => {
  r = new Set();
  for (e of a)
    if (r.has(e)) return e;
    else r.add(e);
  return -1;
};

function firstDuplicate(a) {
  var found = {};
  for (var i = 0; i < a.length; i++) {
    if (found.hasOwnProperty(a[i])) return a[i];
    found[a[i]] = true;
  }
  return -1;
}

input: [2, 1, 3, 5, 3, 2];
output: 3;
input: [8, 4, 6, 2, 6, 4, 7, 9, 5, 8];
output: 6;
