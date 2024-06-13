<template>
    <div>
        <p>ID: {{ userData.id }}</p>
        <div>{{ userData.name }}</div>
        <label for="firstname">Имя: <input v-model="name"></label><br>
        <label for="city">Фамилия: <input v-model="surname"></label>
        <button @click="toggleInfo">Show More</button>
        <div v-show="toggleFlag">
                <p>телефон: {{ userData.phone }}</p>
                <p>email: {{ userData.email }}</p>
        </div>
        <button @click="saveData">Сохранить</button>
    </div>
</template>

<script>
    export default {
        name: 'UserComp',
        data() {
            return{
                toggleFlag: false,
                name: "",
                lastName: "",
            }
        },
        props: {
            userData: Object,
            required: true,
        },
        created() {
            this.name = this.userData.name.firstname,
            this.surname = this.userData.name.lastname

        },
        methods: {
            toggleInfo() {
                this.toggleFlag = !this.toggleFlag
            },
            saveData() {
                const updateUser = {
                    id: this.userData.id,
                    name: this.name,
                    surname: this.surname
                }
                this.$emit('updateUser', updateUser)
            }
        }
    }
</script>

<style lang="css" scoped>

</style>