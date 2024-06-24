<template>
    <BannerComp :urlImg="bannerUrl" :banner="false" />
    <section class="page-details__article center text-center">
        <!-- <h1 class="heading">{{ article.title }}</h1>
        <p class="page-details__text">{{ article.article }}</p> -->
        <router-view></router-view>
    </section>
    <div class="project__slider center">
        <Slider :images="article.url" />
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
            bannerUrl: `img/pageProjectDetails.png`,
            article: null
        }
    },
    computed: {
        ...mapGetters(["getArticle"])
    },
    created() {
        const article = this.getArticle.find(article => article.id === this.$route.params.id)
        if (project) {
            this.article = article
        }
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