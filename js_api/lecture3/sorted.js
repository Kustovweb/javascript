const sortSelect = document.querySelector("#sort-select");
const productList = document.querySelector("#product-list");

const productItem = Array.from(productList.querySelectorAll(".list-item"));


sortSelect.onchange = function () {
    const selectOption = sortSelect.value;
    if (selectOption === "asc") {
        productItem.sort((a, b) => {
            const priceA = parseInt(a.textContent.split('- $')[1]);
            const priceB = parseInt(b.textContent.split('- $')[1]);
            return priceA - priceB;
        })
    } else if (selectOption === "desc") {
        productItem.sort((a, b) => {
            const priceA = parseInt(a.textContent.split('- $')[1]);
            const priceB = parseInt(b.textContent.split('- $')[1]);
            return priceB - priceA;
        })
    }
    productItem.forEach(item => productList.appendChild(item))
}
