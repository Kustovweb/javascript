<template>
    <main class="main">
        <BannerComp urlImg="img/blog-details-banner.jpg" />
        <section class="blog-details-articles center">
            <div class="blog-details-articles__articles">
                <template v-for="article in filter" :key="article.id">
                    <h2 class="heading">{{ article.title }}
                    </h2>
                    <img class="blog-details-articles__img" :src="article.img" alt="">
                    <div class="blog-details-articles__other">
                        <span class="blog-details-articles__date">{{ article.date }}</span>
                        <BreadCrumbs />
                    </div>
                    <p class="blog-details-articles__article"><a href="#">
                            {{ article.article }}
                        </a></p>
                    <blockquote class="quote text-center">
                        <IconQuote id="icon-quote" :width="100" :height="133" />
                        <p>цитата</p>
                    </blockquote>
                </template>
            </div>
            <tags @ontags="filteredArticles"></tags>
        </section>
    </main>
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs.vue';
import IconQuote from '../components/icons/IconQuote.vue'
import Tags from '../blocks/TagsComp.vue'
import { mapGetters } from 'vuex/dist/vuex.cjs.js';
import BannerComp from '../components/BannerComp.vue';
export default {
    components: {
        IconQuote,
        BreadCrumbs,
        Tags,
        BannerComp
    },
    data() {
        return {
            tagName: "",
        }
    },
    methods: {
        filteredArticles(tagName) {
            if (tagName) {
                this.tagName = tagName;
            }
        }
    },
    computed: {
        filter() {
            if (this.tagName) {
                return this.getDataBlog.filter(item => item.tag === this.tagName);
            } else {
                return this.getDataBlog
            }
        },
        ...mapGetters(['getDataBlog'])
    }


}

</script>

<style lang="sass">
    .blog-details-articles
        margin-top: 200px
</style>