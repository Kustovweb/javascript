export default {
    state: {
        vacancies: [], // Массив вакансий
        position: [], // Массив с данными города
        geoLocation: {}, // Координаты
    },
    getters: {
        getVacancies(state) {
            return state.cities
        },
        getLocation(state) {
            return state.geoLocation
        },
        getPosition(state) {
            return state.position
        }
    },
    mutations: {
        updateLocation(state, geoLocation) {
            state.geoLocation = geoLocation
        },
        updatePosition(state, position) {
            state.position = position
        },
        updateDataTrudvsem(state, dataTrudvsem) {
            state.dataTrudvsem = dataTrudvsem
        }
    },
    actions: {
        getGeolocation({ commit }) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async function (position) {
                    const location = {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    }
                    commit('updateLocation', location)
                    let url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
                    let token = "093e63e955fcc79a30ce0ea3de643c91b8380432";
                    let query = { lat: location.lat, lon: location.lon, count: 1, "radius_meters": 50 }

                    let options = {
                        method: "POST",
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                            "Authorization": "Token " + token
                        },
                        body: JSON.stringify(query)
                    }

                    const response = await fetch(url, options)
                    const result = await response.json();
                    commit('updatePosition', result)
                });
            }
        },
    },
}