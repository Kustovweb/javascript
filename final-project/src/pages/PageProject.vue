<template>
    <main class="main">
        <div class="page-project">
            <BannerComp :urlImg="bannerUrl" bannerText="Наш проект" />
            <section class="categories center">
                <nav class="categories__nav">
                    <span @click="filteredArticles(nav.tag)" class="categories__nav-item"
                        v-for="nav in projectListTag">{{ nav.tag }}</span>
                </nav>
            </section>
            <section class="page-project__list center">
                <div class="page-project__item" v-for="project in filter" :key="project.id">
                    <img :src="project.url" :alt="imgAlt">
                    <div class="page-project-wrap">
                        <div class="page-project__nav">
                            <p>{{ project.title }}</p>
                            <BreadCrumbs justify="flex-start" />
                        </div>
                        <ButtonArrowRight :width="70" :height="70" />
                    </div>
                </div>
            </section>
            <PaginationComp />
        </div>
    </main>
</template>

<script>
import BannerComp from '../components/BannerComp.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import ButtonArrowRight from '../components/ButtonArrowRight.vue'
import PaginationComp from '../components/PaginationComp.vue'
export default {
    components: {
        BannerComp,
        BreadCrumbs,
        ButtonArrowRight,
        PaginationComp
    },
    data() {
        return {
            currentTagName: "",
            bannerUrl: `url(/img/bg-project-page.png)`,
            projectListTag: [
                {
                    tag: 'Спальня'
                },
                {
                    tag: 'Ванная комната'
                },
                {
                    tag: 'Кухня'
                },
                {
                    tag: 'Гостиная'
                }

            ],
            projectList: [
                {
                    id: 1,
                    url: "/img/project1.png",
                    imgAlt: "projectImg",
                    title: "Современная Спальня",
                    tag: 'Спальня'


                },
                {
                    id: 2,
                    url: "/img/project2.png",
                    imgAlt: "projectImg",
                    title: "Ванная",
                    tag: 'Ванная комната'

                },
                {
                    id: 3,
                    url: "/img/project3.png",
                    imgAlt: "projectImg",
                    title: "Современная Кухня",
                    tag: 'Кухня'

                },
                {
                    id: 4,
                    url: "/img/project4.png",
                    imgAlt: "projectImg",
                    title: "Гостинная",
                    tag: 'Гостиная'

                }
            ],
        }

    },
    methods: {
        filteredArticles(tagName) {
            if (tagName) {
                this.currentTagName = tagName;
            }
        }
    },
    computed: {
        filter() {
            if (this.currentTagName) {
                return this.projectList.filter(item => item.tag === this.currentTagName);
            } else {
                return this.projectList
            }
        }
    }
}
</script>

<style lang="sass" scoped>
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
        grid-template-columns: 1fr 1fr
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