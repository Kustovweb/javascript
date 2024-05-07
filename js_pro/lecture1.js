// const user = {
//     name: "Evgeniy",
//     money: 1000,
//     [Symbol.toPrimitive](hint) {
//         return hint === 'string' ? `name: ${this.name}` : this.money;
//     }
// };


// console.log(user + 50);


// console.log(user.toString());
// console.log(user.valueOf() === user);

// let body = document.querySelector('body');

// let button = document.createElement('button');
// button.innerText = "Hello"
// button.addEventListener('click', () => {
//     console.log(window.location.hostname);
// })
// body.insertAdjacentElement('afterbegin', button);

// button.dispatchEvent(new Event('click'));


// let reviews = Symbol("Отзывы");
// let rating = Symbol("Рейтинг");
// let tags = Symbol("теги");

// function addMetadata(currentObj, key, value) {
//     currentObj[key] = value;
// }

// function getMetadata(currentObj, metaData) {
//     return currentObj[metaData];
// }


// const books = Object.create(null);

// addMetadata(books, tags, "Хороший отзыв");

// console.log(getMetadata(books, tags));



// const books = [
//     { title: "1984", author: "George Orwell" },
//     { title: "Brave New World", author: "Aldous Huxley" },
//     { title: "Fahrenheit 451", author: "Ray Bradbury" }
// ];

// books[Symbol.iterator] = function () {
//     return {
//         from: 0,
//         to: this.length,
//         next() {
//             if (this.from < this.to) {
//                 return { done: false, value: books[this.from++] }
//             } else {
//                 return { done: true }
//             }
//         }

//     }
// };


// for (const elem of books) {
//     console.log(elem.author, elem.title);
// }



// function getElementHtml() {
//     const divs = document.querySelectorAll("div");
//     return Array.from(divs).filter(elem => elem.dataset.active);

// }


// console.log(getElementHtml());


// let lesson = new Map();
// const lecture = ['математика', 'английский', 'история', 'история'];
// lesson.set("Математика", "Смирнов")
//     .set("История", "Иванова");

// let lectures = new Set(lecture);
// let students = new Map();
// students.set("Иван", lectures)
// console.log(`Преподователь по математике: ${lesson.get("Математика")}`);

// console.log(students.get("Иван"));


let func = new Function('a', 'b', 'return a - b');

console.log(func(4, 2));


