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

//Instance of client
const alonso = new Client("Alonso", 6000);
console.log(alonso.clientType());
console.log(alonso.nameClientBalance());
alonso.getBalance(1000);
console.log(alonso.nameClientBalance());



