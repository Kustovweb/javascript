// Задание 1

// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

//1
const musicCollection = {
    0: {
        title: "Танец злобного гения",
        artist: "Король и Шут, Рома Лейтенант, Denis Bravo",
        year: "2024"
    },
    1: {
        title: "Акустический альбом",
        artist: "Король и Шут",
        year: "1998"
    },
    from: 0,
    to: 2,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        if (this.current < this.to) {
            return { done: false, value: this[this.current++] }
        } else {
            return { done: true }
        }
    }
};

for (const obj of musicCollection) {
    console.log(`Альбом ${obj.title} - Исполнитель ${obj.artist} (${obj.year}) `);
}


//2
const musicCollection1 = {
    0: {
        title: "Танец злобного гения",
        artist: "Король и Шут, Рома Лейтенант, Denis Bravo",
        year: "2024"
    },
    1: {
        title: "Акустический альбом",
        artist: "Король и Шут",
        year: "1998"
    },

    [Symbol.iterator]: function* () {
        for (let key in this) {
            yield this[key];
        }
    }
};


for (const obj of musicCollection1) {
    console.log(`Альбом ${obj.title} - Исполнитель ${obj.artist} (${obj.year}) `);
}

//3
const musicCollection3 = {
    arr: [
        {
            title: "Танец злобного гения",
            artist: "Король и Шут, Рома Лейтенант, Denis Bravo",
            year: "2024"
        },
        {
            title: "Акустический альбом",
            artist: "Король и Шут",
            year: "1998"
        },
    ],

    [Symbol.iterator]: function* () {
        for (let key in this) {
            for (let elem of this[key]) {
                yield elem;
            }
        }
    }
};

for (const obj of musicCollection3) {
    console.log(`Альбом ${obj.title} - Исполнитель ${obj.artist} (${obj.year}) `);
}


// Задание 2

// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const chef = new Map();
chef.set("Виктор", "Пицца")
    .set("Ольга", "Суши")
    .set("Дмитрий", "Десерты");

const dish = new Map();
dish.set("Пицца Маргарита", "Виктор")
    .set("Пицца Пепперони", "Виктор")
    .set("Суши Филадельфия", "Ольга")
    .set("Суши Калифорния", "Ольга")
    .set("Тирамису", "Дмитрий");


const aleksey = {
    name: "Алексей"
}

const maria = {
    name: "Мария"
}

const irina = {
    name: "Ирина"
}


const orders = new Map();
orders.set(aleksey, `Пицца "Пепперони и "Тирамису"`)
    .set(maria, `Суши "Калифорния"`)
    .set(irina, `Суши "Калифорния" и Пицца "Маргарита"`);


console.log(`Клиент ${aleksey.name} заказал: ${orders.get(aleksey)}`);
console.log(`${dish.get("Пицца Маргарита")}`);
