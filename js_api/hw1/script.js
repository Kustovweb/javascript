// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

// 6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

// 7. При разработке используйте Bootstrap для стилизации элементов.


let schedule = `[
    {
        "id": 1,
        "name": "Йога",
        "time": "55'",
        "maxPersonNumber": 10,
        "recordPersonCurrentNumber": 0
    },
    {
        "id": 2,
        "name": "Баланс",
        "time": "55'",
        "maxPersonNumber": 5,
        "recordPersonCurrentNumber": 0
    },
    {
        "id": 3,
        "name": "День Микс",
        "time": "45'",
        "maxPersonNumber": 5,
        "recordPersonCurrentNumber": 0
    },
    {
        "id": 4,
        "name": "Комбат",
        "time": "45'",
        "maxPersonNumber": 4,
        "recordPersonCurrentNumber": 0
    },
    {
        "id": 5,
        "name": "Пресс, ягодицы",
        "time": "30'",
        "maxPersonNumber": 5,
        "recordPersonCurrentNumber": 0
    },
    {
        "id": 6,
        "name": "Режим Стрейч",
        "time": "45'",
        "maxPersonNumber": 5,
        "recordPersonCurrentNumber": 0 
    },
    {
        "id": 7,
        "name": "Степ",
        "time": "45'",
        "maxPersonNumber": 6,
        "recordPersonCurrentNumber": 0
    },
    {
        "id": 8,
        "name": "Функционал",
        "time": "45'",
        "maxPersonNumber": 5,
        "recordPersonCurrentNumber": 0
    },
    {
        "id": 9,
        "name": "МФР + Стрейч",
        "time": "50'",
        "maxPersonNumber": 5,
        "recordPersonCurrentNumber": 0
    }
]`;
let objSchedule = JSON.parse(schedule);
objSchedule.forEach(field => field.id = self.crypto.randomUUID());
schedule = JSON.stringify(objSchedule);

const content = document.querySelector("#content");
const lsKey = "schedule";
if (!localStorage.getItem("schedule")) {
    localStorage.setItem(lsKey, schedule);
}

const data = JSON.parse(localStorage.getItem(lsKey));
function showContent(data) {
    data.forEach(element => {
        content.insertAdjacentHTML("beforeend", templateHtmlList(element.name, element.time, element.maxPersonNumber, element.recordPersonCurrentNumber, element.id));
    });
}

function templateHtmlList(name, time, maxPerson, recordPerson, id) {
    return `
            <div class="col">
            <div class="card mt-5" style="width: 25rem;">
                <div class="card-header">
                    Название программы: <strong>${name}</strong>
                </div>
                <ul class="list-group list-group-flush" data-id="${id}">
                    <li class="list-group-item">Длительность занятия: ${time}</li>
                    <li class="list-group-item" id="maxPerson">Максимальное количество участников: <span>${maxPerson}</span></li>
                    <li class="list-group-item" id="recordPerson">Записано участников: <span>${recordPerson}</span></li>
                    <div class="container-fluid">
                    <div class="row justify-content-center">
                    <div class="col">
                    <button role="button" class="btn btn-success register">Записаться</button>
                    </div>
                    <div class="col">
                    <button role="button" class="btn btn-danger delete">Отменить запись</button>
                    </div>
                    </div>
                    </div>
                </ul>
            </div>
        </div>
    `;
};
showContent(data);
const card = document.querySelectorAll(".card");
const register = document.querySelector(".register");
const listGroup = document.querySelectorAll(".list-group");
[...listGroup].forEach(ul => {
    const maxPerson = ul.querySelector("#maxPerson > span");
    const recordPerson = ul.querySelector("#recordPerson > span");
    ul.addEventListener("click", function ({ target }) {
        const btnRegister = target.closest(".register");
        const btnDelete = target.closest(".delete");
        const ul = target.closest("ul");
        const cardIndex = data.findIndex(obj => obj.id === ul.dataset.id);
        if (btnRegister) {
            data[cardIndex].recordPersonCurrentNumber += 1;
            localStorage.setItem(lsKey, JSON.stringify(data));
            maxPerson.textContent = data[cardIndex].maxPersonNumber;
            recordPerson.textContent = data[cardIndex].recordPersonCurrentNumber;

            if (data[cardIndex].maxPersonNumber === data[cardIndex].recordPersonCurrentNumber) {
                btnRegister.disabled = "true";

            }


        }


        if (btnDelete) {
            data[cardIndex].recordPersonCurrentNumber -= 1;
            localStorage.setItem(lsKey, JSON.stringify(data));
            maxPerson.textContent = data[cardIndex].maxPersonNumber;
            recordPerson.textContent = data[cardIndex].recordPersonCurrentNumber;
            if (data[cardIndex].recordPersonCurrentNumber == 0) {
                btnDelete.disabled = "true";
            }
        }

    });
}
);




