const button = document.querySelector(".btn");
const news = document.querySelector(".news");


const db = [
    {
        title: "Название новости 1",
        content: "Содержимое новости 1"

    },
    {
        title: "Название новости 2",
        content: "Содержимое новости 2"
    }
];


function fetchNews() {
    return new Promise((resolve, reject) => {
        button.disabled = true;
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve(db);
            } else {
                reject("Ошибка загрузки новостей");
            }
        }, 2000)
    })

}


button.addEventListener("click", function () {
    fetchNews()
        .then(data => {
            data.forEach(element => {
                const title = document.createElement("h2");
                const content = document.createElement("p");
                title.textContent = element.title;
                content.textContent = element.content;
                news.appendChild(title);
                news.appendChild(content);
                button.disabled = false;
            });
        })
        .catch(error => {
            news.textContent = `${error}`;
        });
})