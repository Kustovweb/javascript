<template>
    <SearchNavBar :dataGeoloc="getLocation" :dataPosition="getPosition" />
    <div class="my-8 mx-auto text-center">
        <label><input type="text" v-model="nameVacancy"
                class="pt-2 px-2 pb-2 border-2 border-indigo-500/100 rounded-xl mr-2" placeholder="Название вакансии"
                v-for="pos in getPosition.suggestions" v-on:change="getRegionId(pos.data.region_kladr_id)" /></label>
        <button @click="getListData"
            class="border border-slate-300 hover:border-indigo-300 py-2 px-6 rounded-full ml-8">Найти</button>
    </div>
    <div class="mx-auto text-center">
        <TrudvsemAll :data="vacancies" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TrudvsemAll from '@/components/TrudvsemAll.vue'
import HeadHunterAll from '@/components/HeadHunterAll.vue';
import SearchNavBar from '@/components/SearchNavBar.vue';
export default {
    name: 'PageMain',
    components: {
        TrudvsemAll,
        HeadHunterAll,
        SearchNavBar
    },
    computed: {
        ...mapGetters(['getLocation', 'getPosition']),
    },
    data() {
        return {
            region_kladr_id: "",
            nameVacancy: "",
            limit: 1000,
            vacancy: '',
            vacancies: null,
            region: null,
            localVacancy: [],
        }
    },
    methods: {
        ...mapActions(['getGeolocation']),
        async getData() {
            let res = await fetch(`https://opendata.trudvsem.ru/api/v1/vacancies/region/${this.region_kladr_id}?limit=${this.limit}&text=${this.nameVacancy}`)
            if (res.ok) {
                let data = await res.json()
                return data
            } else {
                return new Error("Ошибка получения данных")
            }
        },
        getListData() {
            this.getData().then(async res => {
                this.vacancies = await res.results.vacancies
            })
        },
        getRegionId(regionId) {
            this.region_kladr_id = regionId
        }

    },
    mounted() {
        this.getGeolocation()

    }


}
</script>

<style lang="scss" scoped></style>