class AccountManagement {
    #balance = 0;
    get balance() {
        return this.#balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            throw new Error(`Сумма ${amount} меньше нуля`);
        }
    }
    withdraw(amount) {
        if (this.#balance - amount < 0) {
            throw new Error("Сумма для снятия больше, чем сумма счета")
        }
        this.#balance -= amount;
    }
    constructor(startAmount) {
        if (startAmount > 0) {
            this.#balance = startAmount;
        } else {
            throw new Error("Баланс отрицательный");
        }
    }
}


const account1 = new AccountManagement(500);

account1.deposit(100);



account1.withdraw(250)

console.log(account1.balance);
