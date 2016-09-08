var com;
(function(ns,undefined){
    function Customer(id, name, city) {
        this.id = id || 0;
        this.name = name || "";
        this.city = city || "";
        this._nrOfUnpaidBills = 0;
    }

    Customer.prototype.buyStuff = function () {
        this._nrOfUnpaidBills++;
    }
    Customer.prototype.payBill = function () {
        this._nrOfUnpaidBills++;
    }
    //that returns true,   if the nrOfUnpaidBills is n or more
    //and returns false,  otherwise.
    Customer.prototype.badPayer = function (n) {
        return this._nrOfUnpaidBills >= n;
    }
    Customer.prototype.toString = function () {
        return "(" + this.id + ") " + this.name + " - " + this.city;
    }
    ns.Customer = Customer;
})((com = com || {}, com.simona = com.simona || {}, com.simona.CRM = com.simona.CRM || {}));
