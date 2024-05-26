const apiKey = 'Ia2EchvPbbs3AwzYX2VY2TED8W_lhnOcJQwkX86jDlA';
const root = document.querySelector("#root");
const nameAuthor = document.querySelector(".name-author");
const countLike = document.querySelector("#count-like");
const buttonLike = document.querySelector(".like");
let likePerson = [];
const img = document.createElement('img');
(async () => {
    const res = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`);
    if (res.ok) {
        return res.json();
    }
})().then(data => {
    img.width = 800;
    img.height = 600;
    img.alt = data.alt_description;
    img.src = data.urls.regular;
    img.id = data.id;
    root.insertAdjacentElement("afterbegin", img);
    nameAuthor.textContent = `Автор: ${data.user.username}`
});

if (localStorage.getItem("unsplashPhoto")) {
    const likes = JSON.parse(localStorage.getItem("unsplashPhoto"));
    likePerson = JSON.parse(localStorage.getItem("unsplashPhoto"));
    likes.forEach(obj => {
        if (img.id === obj.like) {
            countLike.textContent = obj.like;
        }
    });
}
buttonLike.addEventListener("click", function () {
    let num = 0;
    countLike.textContent = num + 1;
    likePerson.push({ id: img.id, like: +countLike.textContent });
    localStorage.setItem('unsplashPhoto', JSON.stringify(likePerson))
}, { once: true });