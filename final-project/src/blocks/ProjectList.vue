<template>
    <template v-if="!showMain">
        <div class="page-project">
            <BannerComp :urlImg="bannerUrl" bannerText="Наш проект" :banner="true" />
            <section class="categories center">
                <nav class="categories__nav">
                    <span @click="filteredArticles(nav.tag)" class="categories__nav-item" v-for="nav in dataTag">{{
                        nav.tag
                    }}</span>
                </nav>
            </section>
            <section class="page-project__list center">
                <ProjectItem :dataItem="item" v-for="item in filter" :key="item.id" />
            </section>
        </div>
        <PaginationComp :isVisible="showPagination" />
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

        }
    },
    methods: {
        filteredArticles(tag) {
            this.currentTagName = tag
        }
    },
    computed: {
        filter() {
            if (this.currentTagName) {
                return this.dataList.filter(item => item.tag === this.currentTagName);
            } else {
                return this.dataList
            }
        },
    }
}
</script>

<style lang="sass">
    .page-project:nth-child(n - 1)
        img
            height: 800px
        
</style>