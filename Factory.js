function Factory() {
    this.createEmployee = function (type) {
        var employee;

        if (type === "fulltime") {
            employee = new FullTime();
        } else if (type === "parttime") {
            employee = new PartTime();
        } else if (type === "temporary") {
            employee = new Temporary();
        } else if (type === "contractor") {
            employee = new Contractor();
        }

        employee.type = type;

        employee.say = function () {
            log.add(this.type + ": rate " + this.hourly + "/hour");
        }

        return employee;
    }
}

var FullTime = function () {
    this.hourly = "$12";
};

var PartTime = function () {
    this.hourly = "$11";
};

var Temporary = function () {
    this.hourly = "$10";
};

var Contractor = function () {
    this.hourly = "$15";
};

// log helper
var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();

function run() {
    var employees = [];
    var factory = new Factory();

    employees.push(factory.createEmployee("fulltime"));
    employees.push(factory.createEmployee("parttime"));
    employees.push(factory.createEmployee("temporary"));
    employees.push(factory.createEmployee("contractor"));

    for (var i = 0, len = employees.length; i < len; i++) {
        employees[i].say();
    }

    log.show();
}

run()

////////////////////


class BallFactory {
    constructor() {
      this.createBall = function(type) {
        let ball;
        if (type === 'football' || type === 'soccer') ball = new Football();
        else if (type === 'basketball') ball = new Basketball();
        ball.roll = function() {
          return `The ${this._type} is rolling.`;
        };
  
        return ball;
      };
    }
  }
  
  class Football {
    constructor() {
      this._type = 'football';
      this.kick = function() {
        return 'You kicked the football.';
      };
    }
  }
  
  class Basketball {
    constructor() {
      this._type = 'basketball';
      this.bounce = function() {
        return 'You bounced the basketball.';
      };
    }
  }
  
  // creating objects
  const factory = new BallFactory();
  
  const myFootball = factory.createBall('football');
  const myBasketball = factory.createBall('basketball');
  
  console.log(myFootball.roll()); // The football is rolling.
  console.log(myBasketball.roll()); // The basketball is rolling.
  console.log(myFootball.kick()); // You kicked the football.
  console.log(myBasketball.bounce()); // You bounced the basketball.