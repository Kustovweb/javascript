<template>
    <button class="main__btn"><span class="text">{{ title }}</span><IconArrowRightMain width="15" height="13"/></button>
</template>
<script>
import IconArrowRightMain from './icons/IconArrowRightMain.vue';

    export default {
        components: {
            IconArrowRightMain
        },
        props: {
            title: {
                type: String,
            }
        }
        
    }
</script>

<style lang="sass" scoped>
    .text
        color: #fff
</style>