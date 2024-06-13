<template>
   <UserComp :userData="user" v-for="user in list" :key="user.id" @updateUser="updateUser"/>
   <button class="load" @click="pushListUsers">Загрузить</button>
</template>

<script>
import UserComp from './UserComp.vue'
    export default {
        components: {
            UserComp
        },
        data() {
        return {
            list: null
        }
    },
    methods: {
        async getListUsersServer() {
            const url = await fetch('https://fakestoreapi.com/users?limit=5')
            return url.json()
        },
        pushListUsers() {
            this.getListUsersServer().then(data => {
                this.list = data
            })
        },
        updateUser(userData) {
           const user = this.list.find((user) => user.id === userData.id)
           if (user) {
            user.name = userData.name;
            user.surname = userData.surname
           } else {
            alert('user not found')
           }
        }
    },
    }
    
</script>

<style lang="css" scoped>
    .load {
        background: none;
        border: 1px solid blue;
        padding: 8px 15px;
        color: blue;
        margin-top: 30px;
    }
</style>