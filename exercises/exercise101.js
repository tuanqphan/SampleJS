let sayHello = function sayHello() {
    console.log("Hello there!")
}
sayHello()


let sayHi = (name) => {
    console.log(`Hi there ${name}!`)
}
sayHi("Tuan")


let person = {
    name: "Tuan",
    age: 39,
    sayHelloToPerson: function () {
        console.log(`Hello there ${this.name}, it's ok to be ${this.age}`)
    }
}

person.sayHelloToPerson()
let { name, sayHelloToPerson } = person
sayHelloToPerson()
console.log(`This is the name from person object ${name}`)


function Animal(name = "Mickey") {
    var petName = name;

    return {
        greeting: function () {
            return `${petName} say hi there!`;
        }
    };
}

let myNoNamePet = new Animal()
console.log("myNoNamePet " + myNoNamePet.greeting())

let myPet = new Animal("Thor")
console.log("myPet " + myPet.greeting())

let { greeting } = myPet
console.log("greeting says "+ greeting())



let intArray = ['a', 'b', 'c', 'd', 5, 6, 7, 8, 9, 10]

for (let each in intArray) {
    console.log("For each in " + each)
}

for (let eachKey of intArray.reverse()) {
    console.log(`For eachKey in ${eachKey}`)
}

function printAll(...vals) {
    for (let each of vals) {
        console.log("They are " + each)
    }
}

printAll([12], [11, 11.2], 10, 9, 8, [7, 7.1])
printAll(intArray)

intArray.forEach(
    value => console.log("They also are " + value)
)

let shorten = intArray.filter(
    value => {
        return value > 5 && value < 9
    }
)

console.log(`shorten has value/s of ${shorten}`)

let timeSelf = intArray.map(
    // function (value) {
    //     return value * value
    // }
    value => { 
        return value * value 
    } 
)

console.log(`timeSelf has the values of ${timeSelf}`)

var reduce = shorten.reduce(
    (v1, v2) => { return v1 * v2 }
)
console.log("Been recuded to " + reduce)


class Person {
    constructor(name) {
        this.name = name;
    }

    getInfo() {
        return this.name;
    }
}

class Worker extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }

    getInfo() {
        return `${super.getInfo()} has a job as ${this.title}`
    }
}

engineer = new Worker("Tuan", "Engineer")
console.log(engineer.getInfo())



function tryCallBack(value, printSome) {
    value += value;
    printSome(value);
};

function printSome(value) {
    console.log(value);
}

tryCallBack(12, printSome)



let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};

for (let code in codes) {
    console.log(`${code} has value of ${codes[code]}`); // 1, 41, 44, 49
}

var [first, ...charArray] = ["a", "s", "f", "P"]

for (let eachChar of charArray) {
    console.log(eachChar)
}


class SingleTon {
    constructor(name) {
        // if (typeof SingleTon.instance === "object") {
        //     return SingleTon.instance
        // }

        // this.name = name;
        // SingleTon.instance = this;
        // return this;

        console.log(typeof SingleTon.instance)

        if (typeof SingleTon.instance == "undefined") {
            this.name = name;
            SingleTon.instance = this;
            return this;
        } else {
            return SingleTon.instance;
        }
    }

    getInformarion() {
        console.log(`This is the ${this.name} SingleTon object`)
    }
}

let firstSingle = new SingleTon("first")
firstSingle.getInformarion()

let secondSingle = new SingleTon("second")
secondSingle.getInformarion()


class Vehicle {
    constructor(make) {
        this.make = make;
    }

    getMake() {
        return this.make;
    }
}

class Car extends Vehicle {
    constructor(make) {
        super(make);
    }

    getMake() {
        return `This is a ${super.getMake().toUpperCase()}`
    }
}

class Truck extends Vehicle {
    constructor(make) {
        super(make);
    }

    getMake() {
        return `This is a ${super.getMake().toUpperCase()}`
    }
}

class VehicleFactory {
    constructor() {
        if (typeof VehicleFactory.instance === "object") {
            return VehicleFactory.instance;
        }

        VehicleFactory.instance = this;
        return this;
    }

    creatVehicle(make) {
        switch (make) {
            case "lexus": return new Car(make)
            case "chevey": return new Truck(make)
            default:
                throw new Error("Not supported!")
        }
    }
}

function createCarTruck() {
    
    var vf = new VehicleFactory()

    try {
        var v = vf.creatVehicle("lexus")
        console.log(v.getMake())
    } catch (exception) {
        throw Error(`Received ${exception} exception.`)
    }
}

createCarTruck()

var multiArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < multiArray.length; i++) {
    for (let j = 0; j < multiArray[i].length; j++) {
        console.log(`Classic method ${multiArray[i][j]}`)
    }
}

multiArray.reverse().forEach(
    array => {
        array.reverse().forEach(
            item => {
                console.log(`React method ${item}`)
            }
        )
    }
)


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

class Student {
    set profile(type) {
        this._profile = type;
    }

    get profile() {
        return typeof this._profile === "undefined" ? "Profile not set!" : this._profile
    }
}

var student = new Student();

student.profile = "fulltime";
console.log(`The student is a ${student.profile} student.`)

class PersonalInfo {
    constructor(name) {
        this.name = name;
    }

    static createPersonalInfo(name) {
        return new PersonalInfo(name)
    }

    getInfo() {
        console.log(`This is ${this.name}`)
    }
}

PersonalInfo.createPersonalInfo("Irene").getInfo()

function StudentInfo(name, grade) {
    var studentName = name;
    var studentGrade = grade;

    return {
        // studentName: name,
        // studentGrade: grade,
        getStudentInfo() {
            return `The student name is ${studentName} and in ${studentGrade} grade.`
        }
    }
}

let james = new StudentInfo("James", "5th")
console.log(james.getStudentInfo())

let { getStudentInfo } = james
console.log(getStudentInfo())


class Base {
    constructor() {
    }

    register(child) {
        if (child instanceof Base) {
            this.child = child;
        } else {
            throw new Error("not of Base type class.");
        }
    }

    getChildName() {
        return this.child.name
    }
}

class Child extends Base {
    constructor(name) {
        super();
        this.name = name;
        super.register(this);
    }

    start() {
        return super.getChildName()
    }
}

class WildChild {
}

var child = new Child("Irene");
console.log(child.start())

var wildChild = new WildChild()
var base = new Base()
base.register(base)


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


function whichOne(classType) {
    if (classType instanceof Child) {
        return 0;
    } else if (classType instanceof Base) {
        return 1;
    }
}

console.log(whichOne(base))

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getSortedRandomIntArray(min, max, lenght) {
    var intarray = []
    for (var each = 0; each < lenght; each++) {
        intarray.push(getRandomInt(min, max))
    }
    return intarray.sort()
}

console.log(getSortedRandomIntArray(0, 9, 10))

