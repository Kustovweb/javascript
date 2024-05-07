// Задание 1

// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class ControlLibrary {
    #books = [];
    get allBooks() {
        return this.#books;
    }
    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error("книга с таким названием уже существует в списке");
        } else {
            this.#books.push(title);
        }

    }
    removeBook(title) {
        if (!this.hasBook(title)) {
            throw new Error("книги с таким названием нет");
        } else {
            const filterBooks = this.#books.filter(name => name != title);
            this.#books = [...filterBooks];
        }
    }
    hasBook(title) {
        return this.#books.includes(title);
    }
    constructor(arr) {
        this.arr = arr;
        this.arr.filter((elem, index, array) => {
            if (array.indexOf(elem) !== index) {
                throw new Error("массив содержит дубликаты");
            } else {
                this.#books = [...this.arr];
            }
        });
    }

};

const books = new ControlLibrary(["Гарри Поттер и философский камень", "Гарри Поттер и Тайная комната", "Гарри Поттер и узник Азкабана", "Гарри Поттер и Кубок огня", "Гарри Поттер и Орден Феникса", "Гарри Поттер и Принц-полукровка", "Гарри Поттер и Дары Смерти"]);

console.log(books.removeBook("Гарри Поттер и философский камень"));

console.log(books.allBooks);





// Задание 2

// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];


let input = document.querySelector('.message-id');
let button = document.querySelector('.btn');
let message = document.querySelector('.message');
let textArea = document.querySelector('.message-text');


for (let i = 0; i < initialData.length; i++) {
    let product = initialData[i].product;
    initialData[i].reviews.forEach(elem => {
        let p = document.createElement('p');
        let h4 = document.createElement('h4');
        message.appendChild(h4)
        message.appendChild(p);
        h4.textContent += product;
        p.textContent += elem.text;
    })
}


function addMessage(elem) {
    if (elem.value.length > 500 || elem.value.length < 50) {
        throw new Error("сообщение не соответствует шаблону");
    }

    let p = document.createElement('p');
    let h4 = document.createElement('h4');
    message.appendChild(h4);
    message.appendChild(p);
    h4.textContent += input.value;
    p.textContent += textArea.value;
}

button.addEventListener("click", addMessage.bind(null, textArea));