const countrySelect = document.querySelector("#countrySelect");
const resultCountry = document.querySelector("#capital-info");

countrySelect.addEventListener("change", function () {
    let country = "";

    switch (countrySelect.value) {
        case "russia":
            country = "Москва"
            break;
        case "usa":
            country = "Вашингтон"
            break;
        case "bel":
            country = "Минск"
            break;

        default:
            country = "Выберите страну, чтобы узнать столицу";
            break;
    };

    resultCountry.textContent = country;

})
