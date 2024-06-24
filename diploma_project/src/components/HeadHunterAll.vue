<template>
    <button @click="getListData">Загрузить</button>
    <div v-for="vacancy, index in vacancies">{{ vacancy[index].area.name }}</div>
    <select name="" id="">
        <option value=""></option>
    </select>
    {{ getAllLocation }}
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'HeadHunterAll',
    data() {
        return {
            vacancies: null,
            region: null,
            vacancy: ''
        }
    },
    computed: {
        ...mapGetters(['getLocation', 'getAllLocation']),
        url() {
            return `https://api.hh.ru/vacancies/?text=${this.vacancies}`
        },
    },
    methods: {
        async getData(url) {
            let res = await fetch(url)
            if (res.ok) {
                let data = await res.json()
                return data
            } else {
                return new Error("Ошибка получения данных")
            }
        },
        async getListData() {
            this.getData(this.url).then(res => {
                this.vacancies = res
            })
        },
    }
}
</script>

<style lang="scss" scoped></style>