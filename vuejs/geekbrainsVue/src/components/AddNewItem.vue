<template>
    <div>
        <input type="text" v-model.number="name">
        <input type="number" v-model.number="price">
        <button @click="addCart">addCart</button>
    </div>
</template>

<script>
export default {
    name: "AddNewItem",
    data() {
        return {
            name: "",
            price: null,
        }
    },
    methods: {
        addCart() {
            const id = self.crypto.randomUUID();
            const newProduct = { id, name: this.name, price: this.price };
            this.$emit('addCart', newProduct)
        }
    }

}
</script>

<style lang="scss" scoped></style>