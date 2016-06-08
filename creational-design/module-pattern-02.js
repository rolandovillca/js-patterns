var testModule = (function() {
  var counter = 0;
  return {
    incrementCounter: function() {
      return counter++;
    },
    resetCounter: function() {
      console.log('counter value prior to test:', counter);
      counter = 0;
    }
  };
})();

testModule.incrementCounter();
testModule.resetCounter();

//******************************************************************************

var myNamespace = (function() {
  var myPrivateVar = 0;
  var myPrivateMethod = function(someText) {
    console.log(someText);
  };
  return {
    myPublicVar: 'foo',
    myPublicMethod: function(bar) {
      myPrivateVar;
      myPrivateMethod(bar);
    }
  };
})();

//******************************************************************************

var basketModule = (
  function() {
    var basket = []; //private
    function doSomethingPrivate() {
      //
    }
    function doSomethingElsePrivate() {
      //
    }
    return { // exposed to public
      addItem: function(values) {
        basket.push(values);
      },
      getItemCount: function() {
        return basket.length;
      },
      doSomething: doSomethingPrivate(),
      getTotal: function() {
        var q = this.getItemCount();
        var p = 0;
        while (q--) {
          p += basket[q].price;
        }
        return;
      }
    }
  })()
