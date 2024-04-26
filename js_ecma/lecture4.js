// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/octocat');

// xhr.send();

// xhr.onload = function () {
//     if (xhr.status != 200) {
//         console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//     } else {
//         console.log(`user: ${xhr.response}`);
//     }
// };


// xhr.onprogress = function (event) {
//     console.log(`Get from server: ${event.loaded} bytes`);
// };

// xhr.onerror = function () {
//     console.log("Request error");
// }


// const obj = {
//     name: "Evgeniy",
//     lastName: "Kustov",
// };

// let text = JSON.stringify(obj);

// console.log(text);

// console.log(JSON.parse(text));

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let random = Math.floor(Math.random() * (5 - 0) + 0);
//         let res = 1 / random;
//         if (Number.isFinite(res)) {
//             resolve(res);
//         } else {
//             reject(new Error("Деление на ноль запрещено"));
//         }
//     }, 5000)
// });


// promise
//     .then(resolve => console.log(resolve))
//     .catch(error => console.log(error))
//     .finally(() => console.log("Ура работает"));

// console.log(promise);


// const formData = new FormData();

// formData.append("name", "Evgeniy");
// formData.append("surname", "Kustov");


// function delayedMessage(message, delay) {
//     setTimeout(() => console.log(message), delay);
// };

// delayedMessage("Сообщение 1", 3000);
// delayedMessage("Сообщение 2", 1000);
// delayedMessage("Сообщение 3", 2000);
// console.log("Конец программы");

// const tasks = [
//     { name: 'task 1', time: 1000 },
//     { name: 'task 2', time: 2000 },
//     { name: 'task 3', time: 3000 },
//     { name: 'task 4', time: 4000 },
//     { name: 'task 5', time: 5000 },
// ]

// function getTimeTasks(arr, interval) {
//     let delay = 0;
//     for (let el of arr) {
//         setTimeout(() => {
//             console.log(el.name)
//         }, delay);

//         delay += interval;
//     }
// }

// getTimeTasks(tasks, 1000);



// function loadData(url) {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             console.log(xhr.responseText);
//         }
//     }
//     xhr.open('GET', url, true);
//     xhr.send();
// }

const url = 'https://jsonplaceholder.typicode.com/users/';

const root = document.querySelector("#root");
let ul = document.createElement("ul");
root.append(ul);
let buttonLoad = document.createElement("button");
buttonLoad.innerText = "Загрузить контент";
document.body.append(buttonLoad);
let buttonSort = document.createElement("button");
buttonSort.innerText = "Сортировать";
buttonSort.style.marginLeft = "10px";
buttonSort.disabled = true;
document.body.append(buttonSort);

async function loadData(url) {
    let res = await fetch(url);
    if (res.ok) {
        let data = await res.json();
        return data;
    } else {
        console.error(new Error("Ошибка"));
    }
};


function createElement(data) {
    data.then(res => {
        for (let elem of res) {
            let li = document.createElement("li");
            ul.append(li);
            li.textContent += elem.name;
        }
    })
};

function sortElement() {
    let domElements = root.querySelectorAll("ul li");
    let arrElemSort = [...domElements].sort((a, b) => {
        return a.innerHTML.toLowerCase() > b.innerHTML.toLowerCase();
    });
    ul.innerHTML = "";
    for (let elem of arrElemSort) {
        ul.appendChild(elem);
    }
};

buttonLoad.addEventListener('click', function () {
    createElement(loadData(url));
    buttonSort.disabled = false;
}, { once: true });

buttonSort.addEventListener('click', sortElement);
