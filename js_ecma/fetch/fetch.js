const url = 'https://jsonplaceholder.typicode.com/users/';

const root = document.querySelector("#root");
let ul = document.createElement("ul");
root.append(ul);
let buttonLoad = document.createElement("button");
buttonLoad.innerText = "Загрузить контент";
root.append(buttonLoad);
let buttonSort = document.createElement("button");
buttonSort.innerText = "Сортировать";
buttonSort.style.marginLeft = "10px";
buttonSort.disabled = true;
root.append(buttonSort);

async function loadData(url) { // Ф-я загружающая контент (возвращает промис т.к асинхронная)
    let res = await fetch(url);
    if (res.ok) {
        let data = await res.json();
        return data;
    } else {
        console.error(new Error("Ошибка"));
    }
};


function createElement(data) { // Ф-я создает внутри промиса элементы <li><li/>
    data.then(res => {
        for (let elem of res) {
            let li = document.createElement("li");
            ul.append(li);
            li.textContent += elem.name;
        }
    })
};

function sortElement() { // Ф-я сортирует и выводит новый список
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
