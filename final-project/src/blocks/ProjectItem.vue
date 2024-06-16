<template>
    <div class="page-project__item">
        <img :src="dataItem.url" :alt="dataItem.imgAlt">
        <div class="page-project-wrap">
            <div class="page-project__nav">
                <p>{{ dataItem.title }}</p>
                <BreadCrumbs justify="flex-start" />
            </div>
            <router-link to="/projectDetails">
                <ButtonArrowRight :width="70" :height="70" />
            </router-link>
        </div>
    </div>
</template>

<script>
import ButtonArrowRight from '../components/ButtonArrowRight.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue'
export default {
    name: 'ProjectItem',
    components: {
        ButtonArrowRight,
        BreadCrumbs
    },
    props: {
        projectItem: {
            type: Object,
            required: true
        },
        dataItem: {
            type: Array,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped></style>