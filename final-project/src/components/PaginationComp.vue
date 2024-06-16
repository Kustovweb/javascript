<template>
    <div class="pagination center" v-if="isVisible">
        <router-link @click="pageSelect(page)" class="pagination__page" v-for="page in totalPage" :to="`/blog/${page}`"
            :key="page">{{ page
            }}</router-link>
        <router-link @click="nextPage(page)" :to="`/blog/${page}`" :class="{ disabled: true }" class="pagination__page">
            <IconArrowRight :width="5" :height="13" />
        </router-link>
    </div>
</template>

<script>
import IconArrowRight from './icons/IconArrowRight.vue';

export default {
    name: 'pagination-comp',
    components: {
        IconArrowRight
    },
    data() {
        return {
        }
    },
    props: {
        totalPage: {
            type: Number,
            required: false,
        },
        isVisible: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        pageSelect(page) {
            this.$emit('onCurrentPage', page)
        },
        computed: {
            currentPage() {
                const page = this.$route.params.page
                return page || 1
            }
        }
    },
    mounted() {
        // console.log(this.$route);

        // if (page) this.currentPageNum = +page;
    },
}
</script>

<style lang="sass" scoped>
    .pagination__page
        display: flex
        align-items: center
        justify-content: center
    .disabled 
        opacity: 0.5
        pointer-events: none
</style>