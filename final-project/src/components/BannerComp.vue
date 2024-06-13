<template>
    <div class="banner" :style="{ backgroundImage: urlImg }">
        <div class="banner__intro"><span class="banner__text">{{ bannerText }}</span>
            <BreadCrumbs />
        </div>
    </div>
</template>

<script>
import BreadCrumbs from './BreadCrumbs.vue';
export default {
    components: {
        BreadCrumbs
    },
    name: 'banner-comp',
    props: {
        urlImg: {
            type: String,
            required: true
        },
        bannerText: {
            type: String,
            required: false,
            default: ""
        }
    },

}
</script>

<style lang="sass" scoped>
    .banner
        width: 100%
        margin-top: 57px
        background-repeat: no-repeat
        background-size: cover
        min-height: 360px
        margin-top: 50px
        display: flex
        justify-content: center
        align-items: flex-end
        &__intro
            padding: 41px 128px
            background-color: #fff
            border-radius: 28px 28px 0 0
            font-size: 50px
        &__text
            display: block
            margin-bottom: 15px
</style>