<template>
    <div class="border rounded-xl px-2 py-2 mt-5  w-2/3 mx-auto"
        :class="[isBookmark ? 'border-green-500/100' : 'border-indigo-500/100']">
        <p class="mt-4">Профессия: {{ dataItem['job-name'] }}</p>
        <p class="mt-4">Местоположение : {{ dataItem.region.name }} </p>
        <p class="mt-4">Организация: {{ dataItem.company.name }}</p>
        <p class="mt-4">Образование: {{ dataItem.requirement.education }}</p>
        <p class="mt-4">Зарплата: {{ dataItem.salary }}</p>
        <p class="mt-4" v-for="contact in dataItem.contact_list">{{ contact.contact_type }} : {{ contact.contact_value
            }}</p>
        <a :href="dataItem['vac_url']" target="_blank">Перейти на сайт trudvsem.ru</a>
        <button v-if="!isBookmark" @click="addBookmarks(dataItem.id)"
            class="ml-4 my-4 border border-indigo-500/100 rounded-xl px-2 py-2">Добавить в
            закладки</button>
        <button v-else @click="removeVacancy(dataItem.id)"
            class="ml-4 my-4 border border-red-500/100 rounded-xl px-2 py-2">Удалить
            из закладок</button>
        <div>

            <label :for="dataItem.id"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Заметки</label>
            <textarea v-model="note" :id="dataItem.id" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Записывайте свои заметки сюда..."></textarea>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TrudvsemItem',
    props: {
        dataItem: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

            isBookmark: false,
            id: '',
            note: '',
            isLoading: null
        }
    }, methods: {
        addBookmarks(id) {
            this.id = id
            this.dataItem.note = this.note
            localStorage.setItem(this.dataItem.id, JSON.stringify(this.dataItem))
            this.isBookmark = true
        },
        removeVacancy(id) {
            localStorage.removeItem(id)
            this.isBookmark = false
        },
    },
    beforeCreate() {
        for (let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue;
            }
            if (key === this.id) {
                this.isBookmark = true
            }
        }
    },

}
</script>

<style lang="scss" scoped></style>