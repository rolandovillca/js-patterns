var Singleton = (function() {
  var instance;

  function init() {
    return {
      publicMethod: function() {
        console.log('Hello world.');
      },
      publicProperty: 'test'
    };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

Singleton.getInstance().publicMethod();

var SingletonTester = (function() {
  function Singleton(options) {
    options = options || {}
    this.name = 'SingletonTester';
    this.pointX = args.pointX;
    this.pointY = args.pointY;

    var instance;

    var _static = {
      name: 'SingletonTester',
      getInstance: function(options) {
        if (instance === undefined) {
          instance = new Singleton(options);
        }
        return instance;
      }
    };
    return _static;
  }
})();

var singletonTest = SingletonTester.getInstance({pointX: 5})
console.log(singletonTest.pointX);
