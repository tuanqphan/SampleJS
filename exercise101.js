// let sayHello = function sayHello() {
//     console.log("Hello there!")
// }
// sayHello()

// let sayHi = (name) => {
//     console.log(`Hi there ${name}!`)
// }
// sayHi("Tuan")

// let person = {
//     name: "Tuan",
//     age: 39,
//     sayHelloToPerson: function () {
//         console.log(`Hello there ${this.name}, it's ok to be ${this.age}`)
//     }
// }

// person.sayHelloToPerson()
// let { name, sayHelloToPerson } = person
// sayHelloToPerson()
// console.log(`This is the name from person object ${name}`)



// function Animal(name = "Mickey") {
//     var petName = name;

//     return {
//         greeting: function () {
//             return `${petName} say hi there!`;
//         }
//     };
// }

// let myNoNamePet = new Animal()
// console.log("myNoNamePet " + myNoNamePet.greeting())

// let myPet = new Animal("Thor")
// console.log("myPet " + myPet.greeting())

// let { greeting } = myPet
// console.log("greeting says "+ greeting())



// let intArray = ['a', 'b', 'c', 'd', 5, 6, 7, 8, 9, 10]

// for (let each in intArray) {
//     console.log("For each in " + each)
// }

// for (let eachKey of intArray.reverse()) {
//     console.log(`For eachKey in ${eachKey}`)
// }

// function printAll(...vals) {
//     for (let each of vals) {
//         console.log("They are " + each)
//     }
// }

// printAll(intArray)

// intArray.forEach(
//     value => console.log("They also are " + value)
// )

// let shorten = intArray.filter(
//     value => {
//         return value > 5 && value < 9
//     }
// )

// console.log(`shorten has value/s of ${shorten}`)

// let timeSelf = intArray.map(
//     function (value) {
//         return value * value
//     }
// )

// console.log(`timeSelf has the values of ${timeSelf}`)

// var reduce = shorten.reduce(
//     (v1, v2) => { return v1 + v2 }
// )
// console.log("Been recuded to " + reduce)


// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     getInfo() {
//         return this.name;
//     }
// }

// class Worker extends Person {
//     constructor(name, title) {
//         super(name);
//         this.title = title;
//     }

//     getInfo() {
//         return `${this.name} has a job as ${this.title}`
//     }
// }

// engineer = new Worker("Tuan", "Engineer")
// console.log(engineer.getInfo())



// function tryCallBack(value, printSome) {
//     value += value;
//     printSome(value);
// };

// function printSome(value) {
//     console.log(value);
// }

// tryCallBack(12, printSome)



// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
// };

// for (let code in codes) {
//     console.log(`${code} has value of ${codes[code]}`); // 1, 41, 44, 49
// }

// var [first, ...charArray] = ["a", "s", "f", "P"]

// for (let eachChar of charArray) {
//     console.log(eachChar)
// }


// class SingleTon {
//     constructor(name) {
//         if (typeof SingleTon.instance === "object") {
//             return SingleTon.instance
//         }

//         this.name = name;
//         SingleTon.instance = this;
//         return this;
//     }

//     getInformarion() {
//         console.log(`This is the ${this.name} SingleTon object`)
//     }
// }

// let firstSingle = new SingleTon("first")
// firstSingle.getInformarion()

// let secondSingle = new SingleTon("second")
// secondSingle.getInformarion()


// class Vehicle {
//     constructor(make) {
//         this.make = make;
//     }

//     getMake() {
//         return this.make;
//     }
// }

// class Car extends Vehicle {
//     constructor(make) {
//         super(make);
//     }

//     getMake() {
//         return `This is a ${super.getMake().toUpperCase()}`
//     }
// }

// class Truck extends Vehicle {
//     constructor(make) {
//         super(make);
//     }

//     getMake() {
//         return `This is a ${super.getMake().toUpperCase()}`
//     }
// }

// class VehicleFactory {
//     constructor() {
//         if (typeof VehicleFactory.instance === "object") {
//             return VehicleFactory.instance;
//         }

//         VehicleFactory.instance = this;
//         return this;
//     }

//     creatVehicle(make) {
//         switch (make) {
//             case "lexus": return new Car(make)
//             case "chevey": return new Truck(make)
//             default:
//                 throw new Error("Not supported!")
//         }
//     }
// }

// function createCarTruck() {
//     var vf = new VehicleFactory()

//     try {
//         var v = vf.creatVehicle("lexus")
//         console.log(v.getMake())
//     } catch (exception) {
//         throw Error(`Received ${exception} exception.`)
//     }
// }

// createCarTruck()

// var multiArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (let i = 0; i < multiArray.length; i++) {
//     for (let j = 0; j < multiArray[i].length; j++) {
//         console.log(`Classic method ${multiArray[i][j]}`)
//     }
// }

// multiArray.forEach(
//     array => {
//         array.forEach(
//             item => {
//                 console.log(`React method ${item}`)
//             }
//         )
//     }
// )


// function execute(command) {
//     const exec = require('child_process').exec

//     exec(command, (err, stdout, stderr) => {
//         process.stdout.write(stdout)
//     })
// }

// execute('echo "Hello World!"')

// var today = new Date();
// var lastYear = parseInt(today.getFullYear()) - 1;

// console.log(lastYear.toString())

// getCurrentYear = () => {
//     return new Date().getFullYear();
// }

// getLastYear = () => {
//     return (parseInt(getCurrentYear()) - 1)
// }

// console.log(getCurrentYear())
// console.log(getLastYear())

// var [...asObject] = multiArray;

// console.log(asObject)

// for (let eachArray of asObject) {
//     eachArray.forEach(
//         item => {
//             console.log(`Item is ${item}`)
//         }
//     )
// }

// class Student {
//     set profile(type) {
//         this._profile = type;
//     }

//     get profile() {
//         return typeof this._profile === "undefined" ? "Profile not set!" : this._profile
//     }
// }

// var student = new Student();

// student.profile = "fulltime";
// console.log(`The student is a ${student.profile} student.`)

// class PersonalInfo {
//     constructor(name) {
//         this.name = name;
//     }

//     static createPersonalInfo(name) {
//         return new PersonalInfo(name)
//     }

//     getInfo() {
//         console.log(`This is ${this.name}`)
//     }
// }

// PersonalInfo.createPersonalInfo("Irene").getInfo()

// function StudentInfo(name, grade) {
//     var studentName = name;
//     var studentGrade = grade;

//     return {
//         // studentName: name,
//         // studentGrade: grade,
//         getStudentInfo() {
//             return `The student name is ${studentName} and in ${studentGrade} grade.`
//         }
//     }
// }

// let james = new StudentInfo("James", "5th")
// console.log(james.getStudentInfo())

// let { getStudentInfo } = james
// console.log(getStudentInfo())


// class Base {
//     constructor() {
//     }

//     register(child) {
//         if (child instanceof Base) {
//             this.child = child;
//         } else {
//             throw new Error("not of Base type class.");
//         }
//     }

//     getChildName() {
//         return this.child.name
//     }
// }

// class Child extends Base {
//     constructor(name) {
//         super();
//         this.name = name;
//         super.register(this);
//     }

//     start() {
//         return super.getChildName()
//     }
// }

// class WildChild {
// }

// var child = new Child("Irene");
// console.log(child.start())

// var wildChild = new WildChild()
// var base = new Base()
// base.register(wildChild)


class StockNotifier {
    constructor(price) {
        this.stockPrice = price;
        this.userList = [];
    }

    register(user) {
        this.userList.push(user)
    }

    set stockNewPrice(newPrice) {
        this._stockNewPrice = newPrice;
        //this.stockPrice = newPrice;
        this.notifyAllUser();
    }

    notifyAllUser() {
        this.userList.forEach(
            user => {
                user.notify(this._stockNewPrice)
            }
        )
    }
}

class Trader {
    constructor(user) {
        this.userName = user;
    }
    notify(newPrice) {
        console.log(`The price has been changed to ${newPrice} for ${this.userName}`)
    }
}

var stockMonitor = new StockNotifier(10)
var trader1 = new Trader("Irene")
var trader2 = new Trader("James")


stockMonitor.register(trader1);
stockMonitor.register(trader2);
stockMonitor.stockNewPrice = 11;
stockMonitor.stockNewPrice = 12;
stockMonitor.stockNewPrice = 30;


// function whichOne(classType) {
//     if (classType instanceof Child) {
//         return 0;
//     } else if (classType instanceof Base) {
//         return 1;
//     }
// }

// console.log(whichOne(base))

// console.log("=================================")

// class BallFactory {
//     constructor() {
//         this.createBall = function (type) {
//             let ball;
//             if (type === 'football' || type === 'soccer') ball = new Football();
//             else if (type === 'basketball') ball = new Basketball();
//             ball.roll = function () {
//                 return `The ${this._type} is rolling.`;
//             };

//             return ball;
//         };
//     }
// }

// class Football {
//     constructor() {
//         this._type = 'football';
//         this.kick = function () {
//             return 'You kicked the football.';
//         };
//     }
// }

// class Basketball {
//     constructor() {
//         this._type = 'basketball';
//         this.bounce = function () {
//             return 'You bounced the basketball.';
//         };
//     }
// }

// // creating objects
// const factory = new BallFactory();

// const myFootball = factory.createBall('football');
// const myBasketball = factory.createBall('basketball');

// console.log(myFootball.roll()); // The football is rolling.
// console.log(myBasketball.roll()); // The basketball is rolling.
// console.log(myFootball.kick()); // You kicked the football.
// console.log(myBasketball.bounce()); // You bounced the basketball.


// const car = {
//     noOfWheels: 4,
//     start() {
//         return `started with ${this.noOfWheels}`;
//     },
//     stop() {
//         return `stopped with ${this.noOfWheels}`;
//     },
// };

// // Object.create(proto[, propertiesObject])

// const myCar = Object.create(car, { noOfWheels: { value: 5 } });

// console.log(myCar.__proto__ === car); // true
// console.log(myCar.start())
// console.log(myCar.stop())

// prototypeObject = {
//     fullName: function () {
//         return this.firstName + " " + this.lastName
//     }
// }

// var person2 = Object.create(prototypeObject, {
//     'firstName': {
//         value: "Tuan",
//         writable: true,
//         enumerable: true
//     },
//     'lastName': {
//         value: "Phan",
//         writable: true,
//         enumerable: true
//     }
// })

// console.log(person2.fullName())

// // Target
// function networkFetch(url) {
//     return `${url} - Response from network`;
// }

// // Proxy
// // ES6 Proxy API = new Proxy(target, handler);
// const cache = [];
// const proxiedNetworkFetch = new Proxy(networkFetch, {
//     apply(target, thisArg, args) {
//         const urlParam = args[0];
//         if (cache.includes(urlParam)) {
//             return `${urlParam} - Response from cache`;
//         } else {
//             cache.push(urlParam);
//             return Reflect.apply(target, thisArg, args);
//         }
//     },
// });

// // usage
// console.log(proxiedNetworkFetch('dogPic.jpg')); // 'dogPic.jpg - Response from network'
// console.log(proxiedNetworkFetch('dogPic.jpg')); // 'dogPic.jpg - Response from cache'

// class CumulativeSum {
//     constructor(intialValue = 0) {
//         this.sum = intialValue;
//     }

//     add(value) {
//         this.sum += value;
//         return this;
//     }
// }

// // usage
// const sum1 = new CumulativeSum();
// console.log(sum1.add(10).add(2).add(50).sum); // 62


// const sum2 = new CumulativeSum(10);
// console.log(sum2.add(10).add(20).add(5).sum); // 45


// class SpecialMath {
//     constructor(num) {
//         this._num = num;
//     }

//     square() {
//         return this._num ** 2;
//     }

//     cube() {
//         return this._num ** 3;
//     }

//     squareRoot() {
//         return Math.sqrt(this._num);
//     }
// }

// class Command {
//     constructor(subject) {
//         this._subject = subject;
//         this.commandsExecuted = [];
//     }
//     execute(command) {
//         this.commandsExecuted.push(command);
//         return this._subject[command]();
//     }
// }

// // usage
// const x = new Command(new SpecialMath(5));
// console.log("-------", x.execute('square'));
// console.log("-------", x.execute('cube'));

// console.log(x.commandsExecuted); // ['square', 'cube']


// // using Iterator
// class IteratorClass {
//     constructor(data) {
//         this.index = 0;
//         this.data = data;
//     }

//     [Symbol.iterator]() {
//         return {
//             next: () => {
//                 if (this.index < this.data.length) {
//                     return { value: this.data[this.index++], done: false };
//                 } else {
//                     this.index = 0; // to reset iteration status
//                     return { done: true };
//                 }
//             },
//         };
//     }
// }

// // using Generator
// function* iteratorUsingGenerator(collection) {
//     var nextIndex = 0;

//     while (nextIndex < collection.length) {
//         yield collection[nextIndex++];
//     }
// }

// // usage
// const gen = iteratorUsingGenerator(['Hi', 'Hello', 'Bye']);

// console.log(gen.next().value); // 'Hi'
// console.log(gen.next().value); // 'Hello'
// console.log(gen.next().value); // 'Bye'


// ///////////////////////////////////////
// // through the use of a closure we expose an object
// // as a public API which manages the private objects array
// var collection = (function () {
//     // private members
//     var objects = [];

//     // public members
//     return {
//         addObject: function (object) {
//             objects.push(object);
//         },
//         removeObject: function (object) {
//             var index = objects.indexOf(object);
//             if (index >= 0) {
//                 objects.splice(index, 1);
//             }
//         },
//         getObjects: function () {
//             return JSON.parse(JSON.stringify(objects));
//         }
//     };
// })();

// collection.addObject("Bob");
// collection.addObject("Alice");
// collection.addObject("Franck");
// // prints ["Bob", "Alice", "Franck"]
// console.log(collection.getObjects());
// collection.removeObject("Alice");
// // prints ["Bob", "Franck"]
// console.log(collection.getObjects());


// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//         console.log(`The name os ${name}`);
//     }
//     return displayName;
// }

// var myFunc = makeFunc();
// myFunc();

// var counter = (function () {
//     var privateCounter = 0;
//     function changeBy(val) {
//         privateCounter += val;
//     }
//     return {
//         increment: function () {
//             changeBy(1);
//         },
//         decrement: function () {
//             changeBy(-1);
//         },
//         value: function () {
//             return privateCounter;
//         }
//     };
// })();

// console.log(counter.value()); // logs 0
// counter.increment();
// counter.increment();
// console.log(counter.value()); // logs 2
// counter.decrement();
// console.log(counter.value()); // logs 1