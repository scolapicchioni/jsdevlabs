var com;

(function (ns, undefined) {
    function EventHandler() {
        var listeners = [];

        //adds the listener to the array of listeners,  if the listener is a function
        //fails silently, otherwise
        this.addListener = function (listener) {
            if (typeof listener === "function") {
                listeners.push(listener);
            }
        };

        //removes the first occurrence of the listener in the array of listeners, if the listeners array contains this listener (same object reference)
        //fails silently, otherwise
        this.removeListener = function (listener) {
            var listenerPos = listeners.indexOf(listener);
            if (listenerPos !== -1) {
                listeners.splice(listenerPos, 1);
            }
        };

        //iterates through the array of listener functions and invoke all functions by passing them the sender and args objects.
        this.invoke = function (sender, args) {
            for (var l in listeners) {
                listeners[l](sender, args);
            }
        }

    }
    ns.EventHandler = EventHandler;
})((com = com || {}, com.simona = com.simona || {}, com.simona.common = com.simona.common || {}));


(function (ns, undefined) {
    function Customer(id, name, city) {
        var self = this;
        self.id = id || 0;
        self.name = name || "";
        self.city = city || "";
        var nrOfUnpaidBills = 0;
        
        self.unpaidBillsChanged = new com.simona.common.EventHandler();
        self.buyStuff = function () {
            nrOfUnpaidBills++;
            self.unpaidBillsChanged.invoke(self, { bills: nrOfUnpaidBills });
        }
        self.payBill = function () {
            nrOfUnpaidBills--;
            self.unpaidBillsChanged.invoke(self, { bills: nrOfUnpaidBills });
        }
        //that returns true,   if the nrOfUnpaidBills is n or more
        //and returns false,  otherwise.
        self.badPayer = function (n) {
            return nrOfUnpaidBills >= n;
        }
        self.toString = function () {
            return "(" + self.id + ") " + self.name + " - " + self.city;
        }
    }
    ns.Customer = Customer;
})((com = com || {}, com.simona = com.simona || {}, com.simona.CRM = com.simona.CRM || {}));


