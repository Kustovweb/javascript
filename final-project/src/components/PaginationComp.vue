<template>
    <div class="pagination center">
        <div class="pagination__page pagination__page_num"></div>
        <div class="pagination__page pagination__page_num"></div>
        <div class="pagination__page pagination__page_num"></div>
        <div class="pagination__page">
            <IconArrowRight :width="5" :height="13" />
        </div>
    </div>
</template>

<script>
import IconArrowRight from './icons/IconArrowRight.vue';

export default {
    name: 'pagination-comp',
    components: {
        IconArrowRight
    }
}
</script>

<style lang="sass" scoped>
    .pagination__page
        display: flex
        align-items: center
        justify-content: center
</style>