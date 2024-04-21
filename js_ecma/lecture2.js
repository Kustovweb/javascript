const Rubik = {
    count: 0,
    name: "Евгений",
    age: 18,
    getName() {
        return this.name
    },
    getCounter(count) {
        this.count = count;
        return this.count++;
    }
};

const Logik = {
    __proto__: Rubik,
};

const obj = Object.create(null);

console.log(obj.__proto__);
console.log(obj.toString);

console.log(Rubik.toString);
console.log(Logik.name);



