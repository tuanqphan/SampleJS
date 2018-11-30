var Singleton = (function () {
  var instance;

  function createInstance() {
      var object = new Object("I am the instance");
      return object;
  }

  return {
      getInstance: function () {
          if (!instance) {
              instance = createInstance();
          }
          return instance;
      }
  };
})();

function run() {

  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();

  console.log("Same instance? " + (instance1 === instance2));  
}

run()


////////////////////

class Database {
  constructor(data) {
    if (Database.instance != undefined) {
      return Database.instance;
    }
    this._data = data;
    Database.instance = this;
    return this;
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }
}

// usage
const mongo = new Database('mongo');
console.log(mongo.getData()); // mongo

const mysql = new Database('mysql');
console.log(mysql.getData()); // mongo