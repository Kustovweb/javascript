<template>
    <div class="container mx-auto my-4 relative">
        <h1 v-if="getDataArrLength > 0" class="text-center font-semibold text-3xl">Ваши закладки</h1>
        <p v-else-if="getDataArrLength == 0" class="text-center my-4 text-red-500 text-xl">Закладок нет</p>
        <p class="text-center mt-4">Закладок: {{ getDataArrLength }}</p>
        <router-link to="/PageMain" class="border rounded-xl px-2 py-2 fixed">К поиску</router-link>
        <div v-for="item in dataArr" :key="item.id" class="border rounded-xl px-2 py-2 mt-5  w-2/3 mx-auto"
            :class="[isBookmark ? 'border-green-500/100' : 'border-indigo-500/100']">
            <p>Профессия: {{ item['job-name'] }}</p>
            <p>Местоположение : {{ item.region.name }} </p>
            <p>Организация: {{ item.company.name }}</p>
            <p>Образование: {{ item.requirement.education }}</p>
            <p>Зарплата: {{ item.salary }}</p>
            <p v-for="contact in item.contact_list">{{ contact.contact_type }} : {{ contact.contact_value }}</p>
            <a class="border rounded-xl px-2 py-2 mt-5 " :href="item['vac_url']" target="_blank">Перейти к
                вакансии</a>
            <button @click="removeVacancy(item.id)"
                class="ml-4 my-4 border border-red-500/100 rounded-xl px-2 py-2 transition ease-in-out delay-150 hover:scale-110  duration-300">Удалить
                из закладок</button>
            <p class="my-4 text-gray-900 border-t-blue-400">Заметка: {{ item.note }}</p>
        </div>
    </div>

</template>

<script>
export default {
    name: 'PageBookmarks',
    data() {
        return {
            dataArr: []
        }
    },
    methods: {
        removeVacancy(id) {
            for (let key in localStorage) {
                if (!localStorage.hasOwnProperty(key)) {
                    continue;
                }
                const index = this.dataArr.findIndex(el => el.id === id)
                if (id === key) {
                    this.dataArr.splice(index, 1);
                    localStorage.removeItem(key)
                }
            }
        }
    },
    computed: {
        getDataArrLength() {
            return this.dataArr.length
        }
    },
    beforeMount() {
        for (let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue;
            }
            this.dataArr.push(JSON.parse(localStorage.getItem(key)))
        }
    },

}
</script>

<style lang="scss" scoped></style>