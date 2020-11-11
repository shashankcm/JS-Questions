function getPromise(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve([{'country' : 'INDIA'}, ["a", ["b"]]]);
    },2000)
  })
}

async function getResult(){
  let arr = [];
  let res = await getPromise();
  arr.push(res);
  console.log(arr.flat(Infinity))
}


getResult()