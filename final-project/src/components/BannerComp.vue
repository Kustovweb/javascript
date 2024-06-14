<template>
    <div class="banner" :style="{ backgroundImage: `url(${urlImg})` }">
        <div class="banner__intro" v-if="banner"><span class="banner__text">{{ bannerText }}</span>
            <BreadCrumbs v-if="banner" />
        </div>
    </div>
</template>

<script>
import BreadCrumbs from './BreadCrumbs.vue';
export default {
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
        },
        banner: {
            type: Boolean,
            required: false,
            default: false
        },
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