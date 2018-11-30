function CustomerPrototype(proto) {
    this.proto = proto;

    this.clone = function () {
        var customer = new Customer();

        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;

        return customer;
    };
}

function Customer(first, last, status) {

    this.first = first;
    this.last = last;
    this.status = status;

    this.say = function () {
        console.log("name: " + this.first + " " + this.last +
            ", status: " + this.status);
    };
}

function run() {

    var proto = new Customer("n/a", "n/a", "pending");
    var prototype = new CustomerPrototype(proto);

    var customer = prototype.clone();
    customer.say();
}

run()

////////////////////

const car = {
    noOfWheels: 4,
    start() {
        return 'started';
    },
    stop() {
        return 'stopped';
    },
};

// Object.create(proto[, propertiesObject])

const myCar = Object.create(car, { owner: { value: 'John' } });

console.log(myCar.__proto__ === car); // true
console.log(myCar.start())
console.log(myCar.stop())


/////////////////////


prototypeObject = {
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
}

var person2 = Object.create(prototypeObject, {
    'firstName': {
        value: "Tuan",
        writable: true,
        enumerable: true
    },
    'lastName': {
        value: "Phan",
        writable: true,
        enumerable: true
    }
})

console.log(person2.fullName())

