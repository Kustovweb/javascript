<template>
    <SearchPosition />
    <div class="my-8 mx-auto text-center">
        <label>Название вакансии
            <input type="text" v-model="nameVacancy" v-on:focus="true"
                class="pt-2 px-2 pb-2 border border-indigo-500/100 rounded-lg mr-2" placeholder="Название вакансии" />
        </label>
        <label for="regions">Веберите регион </label>
        <select id="regions" name="select" v-model="tempRegion"
            class="bg-gray-50 border border-indigo-500/100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option v-for="region in getRegions" :key="region.code" :value="region.code" :selected="region.regions">{{
                region.region
            }}</option>
        </select>
        <button @click="getData"
            class="border border-slate-300 hover:border-indigo-300 py-2 px-6 rounded-full ml-8">Найти</button>
    </div>
    <div class="mx-auto text-center">
        <TrudvsemAll :data="vacancies" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TrudvsemAll from '@/components/TrudvsemAll.vue'
import SearchPosition from '@/components/SearchPosition.vue'
export default {
    name: 'PageMain',
    components: {
        TrudvsemAll,
        SearchPosition,
    },
    computed: {
        ...mapGetters(['getLocation', 'getPosition', 'getRegions']),
        regionId() {
            return this.getPosition.regionId
        },
    },
    data() {
        return {
            region_kladr_id: "",
            nameVacancy: "",
            limit: 1000,
            vacancy: '',
            vacancies: {},
            region: null,
            localVacancy: [],
            tempRegion: null
        }
    },
    methods: {
        ...mapActions(['getGeolocation']),
        getData() {
            fetch(`https://opendata.trudvsem.ru/api/v1/vacancies/region/${this.tempRegion}?limit=${this.limit}&text=${this.nameVacancy}`)
                .then(response => {
                    response.json().then(data => {
                        this.vacancies = data.results.vacancies
                    })
                        .catch(err => {
                            console.log(err);
                        })
                })

        },
    },
    mounted() {
        this.getGeolocation()

    }


}
</script>

<style lang="scss" scoped></style>