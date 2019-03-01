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
    var myname = name;
    var myage = age;

    var whata = function () {
        return myname;
    };

    return {
        nameandage: function () {
            return `The name is ${whata()}, and the age is not ${myage} `;
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
    this.myname = name;
    this.myage = age;

    this.whata = function () {
        return `Facts: ${this.myname} is ${this.myage}`;
    };
}

var myinfor = new Infor("Lamm", 400)
console.log(myinfor.whata())

var { myname, myage, whata } = myinfor

console.log("Well:" + myname + " " + myage + " " + whata())

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
    constructor(studentname) {
        this.student = studentname;
    }

    getStudentName() {
        return this.student;
    }
}

var student = new StudentInfor("James")
console.log(student.getStudentName())

// var {getStudentName} = student
// console.log(getStudentName())

//=====================================================

var funfunction = (function doSomething() {
    var list = [];

    var addToList = function addToList(name) {
        list.push(name);
    };

    function showTheList() {
        list.forEach(
            eachname => {
                console.log(eachname)
            }
        );
    };

    return {
        addTo: addToList,
        showList: showTheList
    }

})();


const nameslist = ["Tuan", "Lam", "Irene", "James"];

nameslist.forEach(
    newname => {
        funfunction.addTo(newname)
    }
)

funfunction.showList()

//============================================

function NotifierManager() {
    var registerers = [];
    var instance;

    function register(newname) {
        registerers.push(newname)
    }

    function displayRegisterers() {
        registerers.forEach(
            member => {
                console.log(member)
            }

        )
    }

    function constructor() {
        if (instance == undefined) {
            instance = new NotifierManager();
        }
        return instance;
    };

    return {
        getInstance: constructor,
        register: register,
        display: displayRegisterers
    }

}

var mymanager = new NotifierManager()
var myinstance = mymanager.getInstance()
var myinstance2 = mymanager.getInstance()

nameslist.forEach(
    newname => {
        myinstance.register(newname)
        myinstance2.register(newname)
    }
)

myinstance.display()

//===========================================

var checker = (function Checker() {
    var finished = false;

    function setFinishFlag(done) {
        finished = done;
        console.log(`The finished is ${finished}`)
        return this;
    }

    return {
        setflag: setFinishFlag
    }
})()

checker.setflag(true).setflag(false)
