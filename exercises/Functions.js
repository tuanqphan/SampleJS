function sayHelloTo(person) {
    var name = person;

    return {
        greeting: function () {
            return `Hello ${name}`
        }
    };
}

function greetPerson(sayhello) {
    console.log(`${sayhello.greeting()}, how are you?`)
}

var hello = new sayHelloTo("Tuan")
greetPerson(hello)

//=====================================================

function PersonInfor(name, age) {
    this.name = name;
    this.age = age;

    this.whata = function () {
        return this.name;
    };

    return {
        nameandage: function () {
            return `The name is ${this.whata}, and the age is not ${age} `;
        }
    };
}

var infor = new PersonInfor("Tuan", 35);
console.log(infor.nameandage())

//=====================================================

myInfor = {
    name: "Irene",
    age: 15,
    nameandage: function () {
        return `The name is ${this.name}, and her age is ${this.age} `;
    }
}

console.log(myInfor.nameandage())

//=====================================================

function Infor(name, age) {
    this.name = name;
    this.age = age;

    this.whata = function () {
        return `${this.name} is ${this.age}`;
    };
}

var myinfor = new Infor("Lam", 40)
console.log(myinfor.whata())

var {name, age, whata} = myinfor

console.log(name + " " + age + " " + whata())

//=====================================================

var myLogs = (function Logging() {
    var logs = [];

    return {
        addLog: function (message) {
            logs.push(message)
        },

        showLog: function () {
            logs.forEach(
                line => {
                    console.log(line)
                }
            )
        }
    }
})()

//var myLogs = new Logging()

for (var value = 0; value < 5; value++) {
    myLogs.addLog(`The value is now ${value}`)
}

myLogs.showLog()


//=====================================================

class StudentInfor {
    constructor (studentname) {
        this.student = studentname;
    }

    getStudentName() {
        return this.student;
    }
}

var student = new StudentInfor("James")
console.log(student.getStudentName())

var {getStudentName} = student
console.log(getStudentName())

//=====================================================
