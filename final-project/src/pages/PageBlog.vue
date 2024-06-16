<template>
    <main class="main">
        <section class="blog__banner">
            <div class="blog__intro">
                <h2 class="heading">Статьи &amp;<br> Новости</h2>
                <BreadCrumbs />
            </div>
        </section>
        <section class="posts center">
            <div class="post__latest">
                <h3 class="heading">Последний пост {{ $route.fullPath }}</h3>
                <div class="posts__content">
                    <img :src="lastPost.img" :alt="lastPost.imgAlt" class="posts__img">
                    <div class="posts__subcontent">
                        <h2 class="posts__title">{{ lastPost.title }}</h2>
                        <div class="posts__text">{{ lastPost.article }}</div>
                        <div class="posts__other">
                            <span class="posts__date">{{ lastPost.date }}</span>
                            <router-link to="/blogDetails">
                                <ButtonArrowRight />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="blog center">
            <BlogList :blogData="getDataBlog" :showPagination="true" perPage="6" />
        </section>
    </main>
</template>

<script>
import BlogList from '../blocks/BlogList.vue';
import BannerComp from '../components/BannerComp.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import ButtonArrowRight from '../components/ButtonArrowRight.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        BannerComp,
        BreadCrumbs,
        ButtonArrowRight,
        BlogList
    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        ...mapGetters(["getDataBlog"]),
        lastPost() {
            return this.getDataBlog[this.getDataBlog.length - 1]
        }

    },

}
// this.$router.push('/contact') // Программная навигация
</script>

<style lang="sass">
</style>