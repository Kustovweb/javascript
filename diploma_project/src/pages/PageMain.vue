<template>
    <SearchNavBar :dataGeoloc="getLocation" :dataPosition="getPosition" />
    <div class="my-8 mx-auto text-center">
        <label>Название вакансии
            <input type="text" v-model="nameVacancy" v-on:focus="true"
                class="pt-2 px-2 pb-2 border-2 border-indigo-500/100 rounded-xl mr-2" placeholder="Название вакансии" />
        </label>
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
        regionId() {
            return this.getPosition.regionId
        }
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
            let res = await fetch(`https://opendata.trudvsem.ru/api/v1/vacancies/region/${this.regionId}?limit=${this.limit}&text=${this.nameVacancy}`)
            if (res.ok) {
                let data = await res.json()
                return data
            }
        },
        getListData() {
            this.getData().then(res => {
                this.vacancies = res.results.vacancies
            })
        },

    },
    mounted() {
        this.getGeolocation()

    }


}
</script>

<style lang="scss" scoped></style>