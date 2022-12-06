class Account {

    // the '#' symbol at the beginning of a variable indicates a provate field
    #balance = 0;
    #ownerName = "";

    constructor(ownerName) {
        this.#ownerName = ownerName;
    };

    // our 'get' methods are the only way we can access our private properties from outside of the class
    getOwnerName() {
        return this.#ownerName;
    };

    getBalance() {
        return this.#balance;
    };

    // methods to deposit or withdraw money from our bank account
    deposit(amount) {
        this.#balance += amount;
        return `Balance after deposit: ${this.#balance}`;
    };

    withdraw(amount) {
        this.#balance -= amount;
        return `Balance after withdraw: ${this.#balance}`;
    };

}

var account = new Account("Elijah");

// console.log(account.#ownerName) // throws an error
// console.log(account.getOwnerName()) // returns "Elijah"

// console.log(account.#balance) // throws and error
// console.log(account.getBalance()) // returns #balance property

// console.log(account.deposit(500)); // returns "Balance after deposit: 500"
// console.log(account.withdraw(200)); // returns "Balance after withdraw: 300"