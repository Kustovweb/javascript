// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

function getUserData(id) {
    let promiseFetch = fetch(`https://jsonplaceholder.typicode.com/users/${id}`); // 10 users
    return promiseFetch
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Ошибка");
            }
        })
        .then(function (data) {
            return data;
        }
        )
        .catch(function (error) {
            console.error(error);
        });
}

getUserData(2).then((res) => console.log(res));





// ""Отправка данных на сервер""
// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *
// // Пример использования функции
// const user = {
// name: 'John Smith',
// age: 30,
// email: 'john@example.com'
// };

// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.log(error.message);
// });

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени


const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};


async function saveUserData(obj) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(obj),
    });
    if (!res.ok) {
        throw new Error(`Статус: ${res.status}`);
    }
    return await res;

}
saveUserData(user)
    .then(() => {
        console.log("User data saved successfully");
    })
    .catch(error => {
        console.log(error.message);
    });






// "Изменение стиля элемента через заданное время"

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id /'myElement'

let root = document.querySelector('#root');
root.style.width = '300px';
root.style.height = '300px';
root.style.backgroundColor = 'black';
function changeStyleDelayed(id, delay) {
    setTimeout(() => {
        id.style.backgroundColor = 'red';
    }, delay);
}


changeStyleDelayed(root, 5000)