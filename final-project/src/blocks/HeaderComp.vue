<template>
    <header class="header center">
        <div class="header__left">
            <router-link to="/" class="logo">
                <IconLogo /><span>Interno</span>
            </router-link>
        </div>
        <div class="header__right">
            <ul class="header__menu">
                <li class="header__menu__item"><router-link to="/">Домой</router-link></li>
                <li class="header__menu__item"><router-link to="/blog">Блог</router-link></li>
                <li class="header__menu__item"><router-link to="/project">Проект</router-link></li>
            </ul>
        </div>
    </header>
</template>

<script>
import IconLogo from '../components/icons/IconLogo.vue';
export default {
    components: {
        IconLogo
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