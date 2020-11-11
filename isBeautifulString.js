function isBeautifulString(inputString) {
  let tempArr =[];

  for (let i = 0; i < 25; ++i){
      tempArr.push(0);
  }

  for (let i = 0; i < inputString.length; ++i){
        ++tempArr[inputString.charCodeAt(i) - 97];
  }


  if (tempArr[0] == 'a') return false;


  for (let i = 1; i <= tempArr.length; ++i)

  {

      if (tempArr[i-1] < tempArr[i])

      {

          return false;

      }

  }
return true
}

console.log(isBeautifulString("bbbaacdafe"))
console.log(isBeautifulString("aabbb"))
console.log(isBeautifulString("bbc"))