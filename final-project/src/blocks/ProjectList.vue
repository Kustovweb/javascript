<template>
    <template v-if="!showMain">
        <div class="page-project">
            <BannerComp :urlImg="bannerUrl" bannerText="Наш проект" :banner="true" />
            <section class="categories center">
                <nav class="categories__nav">
                    <span @click="filteredArticles(nav.tag)" class="categories__nav-item" v-for="nav in dataTag"
                        :class="[nav.tag === currentTagName ? 'active' : '']">{{
                            nav.tag
                        }}</span>
                </nav>
            </section>
            <section class="page-project__list center">
                <ProjectItem :dataItem="item" v-for="item in filter" :key="item.id" />
            </section>
        </div>
        <PaginationComp :totalPage="totalPages" @onCurrentPage="onCurrentPage" :isVisible="true" typePage="project" />
    </template>
</template>


<script>
import ButtonArrowRight from '../components/ButtonArrowRight.vue';
import PaginationComp from '../components/PaginationComp.vue';
import ProjectItem from './ProjectItem.vue';

export default {
    components: {
        ButtonArrowRight,
        PaginationComp,
        ProjectItem
    },
    name: 'project-list',
    data() {
        return {
            currentTagName: "",
            bannerUrl: `/img/bg-project-page.png`,
            totalPage: 4,
            currentPage: 1,
        }
    },
    props: {
        dataList: {
            type: Array,
            required: true
        },
        showPagination: {
            type: Boolean,
            required: false
        },
        dataTag: {
            type: Array,
            required: true
        },
        showMain: {
            type: Boolean,
            required: false,
            default: false

        },
    },
    methods: {
        filteredArticles(tag) {
            this.currentTagName = tag
        },
        onCurrentPage(page) {
            return this.currentPage = page
        },
    },
    computed: {
        filter() {
            if (this.currentTagName) {
                return this.dataList.filter(item => item.tag === this.currentTagName);
            } else {
                return this.dataList
            }
        },
        paginatedBlog() {
            const { currentPage, totalPage } = this;
            const startIndex = (currentPage - 1) * totalPage;
            const endIndex = startIndex + totalPage;
            return this.dataList.slice(startIndex, endIndex)
        },
        totalPages() {
            return Math.ceil(this.dataList.length / this.totalPage);
        },
    }
}
</script>

<style lang="sass">
.categories__nav-item
    padding-right: 10px
    padding-left: 10px
</style>