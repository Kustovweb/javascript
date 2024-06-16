<template>
    <div class="breadcrumbs" :style="{ justifyContent: justify }">
        <a class="breadcrumbs__link" href="/">Домой</a>
        <a class="breadcrumbs__link" href="#">Интерьер</a>
        <a class="breadcrumbs__link" href="#">Декор</a>
    </div>
</template>

<script>
export default {
    name: 'bread-crumbs',
    props: {
        justify: {
            type: String,
            default: "center"
        },
        crumbs: {
            type: Array,
            required: true
        }
    },
    methods: {
        isLast(index) {
            return index === this.crumbs.length - 1
        },
        selected(crumb) {
            this.$emit('selected', crumb)
        }
    }
}
</script>

<style lang="sass" scoped>
.breadcrumbs
    display: flex
    justify-content: center
    align-items: center
    font-size: 16px
    font-family: 'Jost', sans-serif
    &__li
        position: relative
    &__link:not(:last-child)::after
        content: '/'
        display: inline-flex
        padding-right: 8px
        padding-left: 8px
</style>