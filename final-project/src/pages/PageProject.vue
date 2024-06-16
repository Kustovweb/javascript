<template>
    <main class="main">
        <ProjectList :dataList="dataProjectList" :dataTag="dataProjectListTag" />
    </main>
</template>

<script>
import { mapGetters } from 'vuex';
import ProjectList from '../blocks/ProjectList.vue';

export default {
    components: {
        ProjectList
    },
    data() {
        return {


        }

    },

    computed: {
        ...mapGetters(["dataProjectListTag", "dataProjectList"]),


    },
}
</script>

<style lang="sass">
    .categories
        margin-top: 200px
        &__nav
            border: 1px solid #CDA274
            display: flex
            justify-content: center
            align-items: center
            gap: 40px
            border-radius: 28px
            max-width: 880px
            margin: 0 auto
        &__nav-item
            padding: 26px 66px
            font-family: "Jost", sans-serif
            font-weight: 600
            cursor: pointer
            transition: all .3s ease
    .active
        background-color: #CDA274
        color: #fff
        border-radius: 20px
    .page-project__list
        margin-top: 61px
        display: grid
        grid-template-columns: repeat(2, 1fr)
        grid-auto-rows: 1fr
        gap: 30px
        margin-bottom: 61px
    .page-project-wrap
        display: flex
        justify-content: space-between
        margin-top: 24px
    .page-project__item
        img
            width: 100%
                

</style>