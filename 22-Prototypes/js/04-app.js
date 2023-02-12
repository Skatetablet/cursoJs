function Client(name, balance) {
    this.name = name;
    this.balance = balance;
}

Client.prototype.clientType = function() {
    let type;
    if (this.balance > 10000){
        type = "Gold";
    } else if ( this.balance > 5000) {
        type = "Platinum";
    } else {
        type = "Normal";
    }

    return type;
}

Client.prototype.nameClientBalance = function() {
    return `Name: ${this.name}, Balance: $${this.balance}, Client Type: ${this.clientType()}`
}

Client.prototype.getBalance = function(gets) {
    this.balance -= gets;
}

function Person(name, balance, telephone) {
    Client.call(this, name, balance);
    this.telephone = telephone;
}

Person.prototype = Object.create(Client.prototype);
Person.prototype.constructor = Client;

const ricardo = new Person("Ricardo", 5000, 6624509565)
console.log(ricardo);

console.log(ricardo.getBalance(100));
console.log(ricardo.nameClientBalance());

Person.prototype.showTelephone = function() {
    return `The telephone of this person is ${this.telephone}`;
}

console.log(ricardo.showTelephone());