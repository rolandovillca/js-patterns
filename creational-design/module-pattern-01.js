/**
 * Example 1:
 * Create a module called testModule.
 * Expose some public methods, via return statement.
 */
var testModule = (function() {
  var counter = 0;
  return {
    incrementCounter: function() {
      return counter++;
    },
    resetCounter: function() {
      console.log('Counter previous value is: ', counter)
      counter = 0;
    }
  };
})();

testModule.incrementCounter()
testModule.incrementCounter()
testModule.resetCounter()

/**
 * Example 2.
 */
var namespace = (function() {
  var myPrivateVar = 0;
  var myPrivateMethod = function(text) {
    console.log(text);
  }

  return {
    myPublicVar: 'foo',
    myPublicFunction: function(bar) {
      myPrivateVar++;
      myPrivateMethod(bar);
    }
  };
})();

/**
 * Example 3.
 */
var basketModule = (function() {
  var basket = [];
  function doSomethingPrivate() {
    console.log('To do something private.');
  }

  function doSomethingElsePrivate() {
    console.log('To do something else');
  }

  return {
    addItem: function(item) {
      basket.push(item);
    },
    getItemCount: function() {
      return basket.length;
    },
    doSomething: doSomethingPrivate(),
    getTotal: function() {
      var q = this.getItemCount();
      var priceTotal = 0;
      while(q--) {
        priceTotal += basket[q].price;
      }
      return priceTotal;
    }
  };
})();
