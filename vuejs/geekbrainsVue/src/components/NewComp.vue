<template>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>{{ counter }}</p>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'new-comp',
    data() {
        return {

        }
    },
    methods: {
        ...mapMutations(["INCREMENT", "DECREMENT"]),
        increment() {
            // this.$store.commit('INCREMENT')
            this.INCREMENT()
        },
        decrement() {
            // this.$store.commit('DECREMENT')
            this.DECREMENT()
        }
    },
    computed: {
        counter() {
            return this.$store.state.count
        }
    }
}
</script>

<style lang="scss" scoped></style>