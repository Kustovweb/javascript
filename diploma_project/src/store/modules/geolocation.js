export default {
    state: {
        vacancies: [], // Массив вакансий
        position: {}, // Массив с данными города
        geoLocation: {}, // Координаты
        regions: [
            {
                'region': 'Республика Адыгея (Адыгея)',
                'code': '01'
            },
            {
                'region': 'Республика Башкортостан',
                'code': '02'
            },
            {
                'region': 'Республика Бурятия',
                'code': '03'
            },
            {
                'region': 'Республика Алтай',
                'code': '04'
            },
            {
                'region': 'Республика Ингушетия',
                'code': '06'
            },
            {
                'region': 'Кабардино-Балкарская Республика',
                'code': '07'
            },
            {
                'region': 'Республика Калмыкия',
                'code': '08'
            },
            {
                'region': 'Карачаево-Черкесская Республика',
                'code': '09'
            },
            {
                'region': 'Республика Карелия',
                'code': 10
            },
            {
                'region': 'Республика Коми',
                'code': 11
            },
            {
                'region': 'Республика Марий Эл',
                'code': 12
            },
            {
                'region': 'Республика Мордовия',
                'code': 13
            },
            {
                'region': 'Республика Саха (Якутия)',
                'code': 14
            },
            {
                'region': 'Республика Северная Осетия — Алания',
                'code': 15
            },
            {
                'region': 'Республика Татарстан (Татарстан)',
                'code': 16
            },
            {
                'region': 'Республика Тыва',
                'code': 17
            },
            {
                'region': 'Удмуртская Республика',
                'code': 18
            },
            {
                'region': 'Республика Хакасия',
                'code': 19
            },
            {
                'region': 'Чувашская Республика — Чувашия',
                'code': 21
            },
            {
                'region': 'Алтайский край',
                'code': 22
            },
            {
                'region': 'Краснодарский край',
                'code': 23
            },
            {
                'region': 'Приморский край',
                'code': 25
            },
            {
                'region': 'Ставропольский край',
                'code': 26
            },
            {
                'region': 'Хабаровский край',
                'code': 27
            },
            {
                'region': 'Амурская область',
                'code': 28
            },
            {
                'region': 'Архангельская область',
                'code': 30
            },
            {
                'region': 'Белгородская область',
                'code': 31
            },
            {
                'region': 'Брянская область',
                'code': 32
            },
            {
                'region': 'Владимирская область',
                'code': 33
            },
            {
                'region': 'Волгоградская область',
                'code': 34
            },
            {
                'region': 'Вологодская область',
                'code': 35
            },
            {
                'region': 'Воронежская область',
                'code': 36
            },
            {
                'region': 'Ивановская область',
                'code': 37
            },
            {
                'region': 'Иркутская область',
                'code': 38
            },
            {
                'region': 'Калининградская область',
                'code': 39
            },
            {
                'region': 'Калужская область',
                'code': 40
            },
            {
                'region': 'Камчатский край',
                'code': 41
            },
            {
                'region': 'Кемеровская область',
                'code': 42
            },
            {
                'region': 'Кировская область',
                'code': 43
            },
            {
                'region': 'Костромская область',
                'code': 44
            },
            {
                'region': 'Курганская область',
                'code': 45
            },
            {
                'region': 'Курская область',
                'code': 46
            },
            {
                'region': 'Ленинградская область',
                'code': 47
            },
            {
                'region': 'Липецкая область',
                'code': 48
            },
            {
                'region': 'Магаданская область',
                'code': 49
            },
            {
                'region': 'Московская область',
                'code': 50
            },
            {
                'region': 'Мурманская область',
                'code': 51
            },
            {
                'region': 'Нижегородская область',
                'code': 52
            },
            {
                'region': 'Новгородская область',
                'code': 53
            },
            {
                'region': 'Новосибирская область',
                'code': 54
            },
            {
                'region': 'Омская область',
                'code': 55
            },
            {
                'region': 'Оренбургская область',
                'code': 56
            },
            {
                'region': 'Орловская область',
                'code': 57
            },
            {
                'region': 'Пензенская область',
                'code': 58
            },
            {
                'region': 'Пермский край',
                'code': 59
            },
            {
                'region': 'Псковская область',
                'code': 60
            },
            {
                'region': 'Ростовская область',
                'code': 61
            },
            {
                'region': 'Рязанская область',
                'code': 62
            },
            {
                'region': 'Самарская область',
                'code': 63
            },
            {
                'region': 'Саратовская область',
                'code': 64
            },
            {
                'region': 'Сахалинская область',
                'code': 65
            },
            {
                'region': 'Свердловская область',
                'code': 66
            },
            {
                'region': 'Смоленская область',
                'code': 67
            },
            {
                'region': 'Тамбовская область',
                'code': 68
            },
            {
                'region': 'Тверская область',
                'code': 69
            },
            {
                'region': 'Томская область',
                'code': 70
            },
            {
                'region': 'Тульская область',
                'code': 71
            },
            {
                'region': 'Тюменская область',
                'code': 72
            },
            {
                'region': 'Ульяновская область',
                'code': 73
            },
            {
                'region': 'Челябинская область',
                'code': 74
            },
            {
                'region': 'Забайкальский край',
                'code': 75
            },
            {
                'region': 'Ярославская область',
                'code': 76
            },
            {
                'region': 'Москва',
                'code': 77
            },
            {
                'region': 'Санкт-Петербург',
                'code': 78
            },
            {
                'region': 'Еврейская автономная область',
                'code': 79
            },
            {
                'region': 'ДНР',
                'code': 80
            },
            {
                'region': 'ЛНР',
                'code': 81
            },
            {
                'region': 'Республика Крым',
                'code': 82
            },
            {
                'region': 'Ненецкий автономный округ',
                'code': 83
            },
            {
                'region': 'Херсонская область',
                'code': 84
            },
            {
                'region': 'Запорожская область',
                'code': 85
            },
            {
                'region': 'Ханты-Мансийский автономный округ — Югра',
                'code': 86
            },
            {
                'region': 'Чукотский автономный округ',
                'code': 87
            },
            {
                'region': 'Ямало-Ненецкий автономный округ',
                'code': 89
            },
            {
                'region': 'Севастополь',
                'code': 92
            },
            {
                'region': 'Чеченская республика',
                'code': 95
            },

        ]


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
        },
        getRegions(state) {
            return state.regions
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
                navigator.geolocation.getCurrentPosition(position => {
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

                    fetch(url, options)
                        .then(response => {
                            response.json().then(data => {
                                for (let item of data.suggestions) {
                                    commit('updatePosition', {
                                        regionAll: item.value,
                                        city: item.data.area,
                                        regionId: item.data.region_kladr_id
                                    })
                                }
                            })
                        })


                });
            }
        },
    },
}