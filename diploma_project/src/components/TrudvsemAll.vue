<template>
    <div class="mt-2 mb-2 mx-auto text-center">
        <TrudvsemItem :dataItem="vacancyItem.vacancy" v-for="vacancyItem in data" :key="vacancyItem.id" />
    </div>
</template>

<script>
import TrudvsemItem from './TrudvsemItem.vue'
export default {
    name: 'TrudvsemAll',
    components: {
        TrudvsemItem
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },

    computed: {

    },



}
</script>

<style lang="scss" scoped></style>