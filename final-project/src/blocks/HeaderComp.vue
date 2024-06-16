<template>
    <header class="header center">
        <div class="header__left">
            <router-link to="/" class="logo">
                <IconLogo /><span>Interno</span>
            </router-link>
        </div>
        <div class="header__right">
            <MenuComp class="header__menu" />
        </div>
    </header>
</template>

<script>
import IconLogo from '../components/icons/IconLogo.vue';
import MenuComp from '../components/MenuComp.vue'
export default {
    components: {
        IconLogo,
        MenuComp
    },
    name: 'header-temp',
    data() {
        return {

        }
    },
}
</script>

<style lang="sass" scoped>

</style>