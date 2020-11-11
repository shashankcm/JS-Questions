// How would you write a function that can be called only once? (not self envoking, you can call
//it, whenever you want, but only once)

// Solution - 1
var something = (function () {
  var userName = "Shshank";
  
  function display(name)
  {
      console.log(name);
  }
  display(userName);
})();

something // Shashank 
something // 

// Solution - 2

function once(fn, context) { 
  var result;
  return function() { 
      if (fn) {
          result = fn.apply(context || this, arguments);
          fn = null;
      }
      return result;
  };
}

// Usage
var canOnlyFireOnce = once(function() {
console.log('Fired!');
});

canOnlyFireOnce(); // "Fired!"
canOnlyFireOnce(); // 

