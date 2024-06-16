<template>
    <ul class="breadcrumbs" :style="{ justifyContent: justify }">
        <li v-for="crumb, index in crumbs" href="#" :class="{ disabled: isLast(index) }">
            <button @click="selected(crumb)" class="breadcrumbs__link">
                {{ crumb }}
            </button>
        </li>
    </ul>
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

<style lang="sass">
    .breadcrumbs
        padding: 0
        list-style: none
</style>