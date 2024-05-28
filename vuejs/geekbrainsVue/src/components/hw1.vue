<script>
    export default {
        data() {
            return {
                message: 'Hello Vue!!!',
                items: ["OldElement1", "OldElement2"],
                inputText: "",
            }
        },
        methods: {
            reverse() {
                const text = this.message.split('').reverse().join('');
                this.message = text;
            },
            addElementList() {
                if (this.inputText.length != 0) {
                    this.items.push(this.inputText);
                }
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
    <input type="text" v-model="inputText" placeholder="Введите текст">
    <button @click = "addElementList">Добавить элемент</button>
</template>

<style scoped>

</style>