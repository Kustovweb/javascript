// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const nameProductValue = document.querySelector(".product").value;
const messageValue = document.querySelector(".message").value;
const saveButton = document.getElementById("save-btn");
const productList = document.querySelector(".productList");
const loadButton = document.getElementById("load-btn");


function saveMessage(key, value) {
    const messageList = JSON.parse(localStorage.getItem(key)) ?? [];
    if (value !== "") {
        messageList.push(value.trim());
        localStorage.setItem(key.trim(), JSON.stringify(messageList));
    }
}

saveButton.addEventListener("click", saveMessage.bind(null, nameProductValue, messageValue));


function loadMessageKeys() {
    if (localStorage.length !== 0) {
        for (let i = 0; i < localStorage.length; i++) {
            const listElement = document.createElement('li');
            listElement.textContent = localStorage.key(i);
            productList.appendChild(listElement);
        }
    }
}
loadButton.addEventListener("click", function () {
    loadMessageKeys();
    loadButton.disabled = true;
});


function showMessage(selector) {
    return new Promise(resolve => {
        const observer = new MutationObserver((mutations, obs) => {
            if (document.querySelector(selector)) {
                resolve(document.querySelectorAll(selector));
                obs.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    })
};


(async () => {
    const listLi = await showMessage(".productList li");
    listLi.forEach(element => {
        element.addEventListener("click", function () {
            let nameBrand = element.textContent;
            const setValue = JSON.parse(localStorage.getItem(element.textContent));
            setValue.forEach(text => {
                const ul = document.createElement("ul");
                const newLi = document.createElement("li");
                const button = document.createElement("button");
                button.textContent = "Удалить";
                newLi.textContent = text;
                const newLiValue = newLi.textContent;
                newLi.appendChild(button);
                ul.appendChild(newLi);
                element.appendChild(ul);
                button.addEventListener("click", function (event) {
                    event.stopPropagation();
                    setValue.splice(setValue.indexOf(newLiValue), 1);
                    localStorage.setItem(nameBrand, JSON.stringify(setValue));
                })
            })
        }, { once: true })
    });
})();