<template>
       <div class="blog__items" >
                        <BlogListItem :blogItem = "blogItem" v-for="blogItem in blogList" :key="blogItem.id"/>
                    </div>
</template>

<script>
import BlogListItem from './BlogListItem.vue';

    export default {
        components: {
            BlogListItem
        },
        props: {
            blogList: {
                type: Array,
                required: true
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>