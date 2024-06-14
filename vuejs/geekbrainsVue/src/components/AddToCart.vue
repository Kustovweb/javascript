<template>
    <div v-for="item of cartItems" :key="item.id">
        <p>{{ item.name }} : {{ item.price }}</p>
    </div>
    <AddNewItem @addCart="addCart" />
    <p>Количество товаров: {{ countProduct }}</p>
    <p>Сумма товаров: {{ totalPrice }}</p>
</template>

<script>
import { mapGetters } from 'vuex';
import AddNewItem from './AddNewItem.vue'
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
    components: {
        AddNewItem
    },
    mounted() {
        this.fetchData()
    },
    computed: {
        ...mapGetters(['cartItems', 'countProduct', 'totalPrice']),

    },
    methods: {
        ...mapMutations(['ADD_TO_CART']),
        ...mapActions(['fetchData']),
        addCart(product) {
            this.ADD_TO_CART(product)
        }
    }
}
</script>

<style lang="scss" scoped></style>