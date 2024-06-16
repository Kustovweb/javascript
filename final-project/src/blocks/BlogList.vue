<template>
    <div class="blog__items">
        <BlogItem :blogItem="blogItem" v-for="blogItem in paginatedBlog" :key="blogItem.id" />
    </div>
    <PaginationComp :totalPage="totalPages" @onCurrentPage="onCurrentPage" :isVisible="showPagination"
        typePage="blog" />
</template>

<script>
import BlogItem from './BlogItem.vue';
import PaginationComp from '../components/PaginationComp.vue'

export default {
    components: {
        BlogItem,
        PaginationComp
    },
    data() {
        return {
            currentPage: 1
        }
    },
    methods: {
        onCurrentPage(page) {
            return this.currentPage = page
        }
    },
    computed: {
        paginatedBlog() {
            const { currentPage, perPage } = this;
            const startIndex = (currentPage - 1) * perPage;
            const endIndex = startIndex + perPage;
            return this.blogData.slice(startIndex, endIndex)
        },
        totalPages() {
            return Math.ceil(this.blogData.length / this.perPage);
        },


    },
    props: {
        blogData: {
            type: Array,
            required: false
        },
        showPagination: {
            type: Boolean
        },
        perPage: {
            type: Number,
            required: false,
            default: 3
        }
    }

}
</script>

<style lang="scss" scoped></style>