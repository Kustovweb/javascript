<script>
    export default {
        data() {
            return {
                message: 'Hello Vue!!!',
                items: ["OldElement1", "OldElement2"]
            }
        },
        methods: {
            reverse() {
                const text = this.message.split('').reverse().join('');
                this.message = text;
            },
            addElementList() {
                this.items.push('Новый элемент списка');
            },
            removeItem(index) {
                this.items.splice(index, 1);
            }
        },
    }
</script>


<template>
    <div class="message">{{ message }}</div>
    <button @click="reverse">Перевернуть текст</button>
    <ul v-for="(element,index) in items" :key="index">
        <li @click="removeItem(index)">{{ element }}</li>
    </ul>
    <button @click = "addElementList">Добавить элемент списка</button>
</template>

<style scoped>

</style>