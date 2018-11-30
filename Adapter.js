// old interface

function Shipping() {
  this.request = function (zipStart, zipEnd, weight) {
    // ...
    return "$49.75";
  }
}

// new interface

function AdvancedShipping() {
  this.login = function (credentials) { /* ... */ };
  this.setStart = function (start) { /* ... */ };
  this.setDestination = function (destination) { /* ... */ };
  this.calculate = function (weight) { return "$39.50"; };
}

// adapter interface

function ShippingAdapter(credentials) {
  var shipping = new AdvancedShipping();

  shipping.login(credentials);

  return {
    request: function (zipStart, zipEnd, weight) {
      shipping.setStart(zipStart);
      shipping.setDestination(zipEnd);
      return shipping.calculate(weight);
    }
  };
}

// log helper

var log = (function () {
  var log = "";

  return {
    add: function (msg) { log += msg + "\n"; },
    show: function () { console.log(log); log = ""; }
  }
})();

function run() {
  var shipping = new Shipping();
  var credentials = { token: "30a8-6ee1" };
  var adapter = new ShippingAdapter(credentials);

  // original shipping object and interface

  var cost = shipping.request("78701", "10010", "2 lbs");
  log.add("Old cost: " + cost);

  // new shipping object with adapted interface

  cost = adapter.request("78701", "10010", "2 lbs");

  log.add("New cost: " + cost);
  log.show();
}

run()


///////////////////////


// old interface
class OldCalculator {
  constructor() {
    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case 'add':
          return term1 + term2;
        case 'sub':
          return term1 - term2;
        default:
          return NaN;
      }
    };
  }
}

// new interface
class NewCalculator {
  constructor() {
    this.add = function (term1, term2) {
      return term1 + term2;
    };
    this.sub = function (term1, term2) {
      return term1 - term2;
    };
  }
}

// Adapter Class
class CalcAdapter {
  constructor() {
    const newCalc = new NewCalculator();

    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case 'add':
          // using the new implementation under the hood
          return newCalc.add(term1, term2);
        case 'sub':
          return newCalc.sub(term1, term2);
        default:
          return NaN;
      }
    };
  }
}

// usage
const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 5, 'add')); // 15

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 5)); // 15

const adaptedCalc = new CalcAdapter();
console.log(adaptedCalc.operations(10, 5, 'add')); // 15;

