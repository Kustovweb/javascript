<template>
    <BannerComp :urlImg="bannerUrl" :banner="false" />
    <section class="page-details__article center text-center">
        <h1 class="heading">{{ getArticle.title }}</h1>
        <p class="page-details__text">{{ getArticle.article }}</p>
    </section>
    <div class="project__slider center">
        <Slider />
    </div>
</template>

<script>
import BannerComp from '../components/BannerComp.vue';
import { mapGetters } from 'vuex';
import Slider from '../blocks/Slider.vue';
export default {
    name: 'project-details',
    components: {
        BannerComp,
        Slider

    },
    data() {
        return {
            bannerUrl: `img/pageProjectDetails.png`
        }
    },
    computed: {
        ...mapGetters(["getArticle"])
    }
}
</script>

<style lang="sass" scoped>
    .page-details
        &__article
            margin-top: 200px
            text-align: left
        &__text
            font-size: 22px
            font-weight: 400
            font-family: 'Jost', sans-serif
            line-height: 1.5
            
</style>