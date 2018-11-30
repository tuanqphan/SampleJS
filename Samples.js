class Individual {
    constructor(name) {
        this.name = name;
    }

    displayName () {
        console.log(`The individual name is ${this.name}`);
    }
}

class Investor extends Individual {
    constructor(name, accountType) {
        super(name);
        this.accountType = accountType;
    }
    getAccountType() {
        return this.accountType;
    }
}


var investor = new Investor("Tuan", "Ind.");
investor.displayName();
console.log(investor.getAccountType());
