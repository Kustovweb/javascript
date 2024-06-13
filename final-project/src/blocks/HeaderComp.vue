<template>
   <header class="header center">
        <div class="header__left">
            <a class="logo" href="#"><IconLogo /><span>Interno</span></a>
        </div>
        <div class="header__right">
            <ul class="header__menu">
                <li v-for="link in headerLinks" :key="link" :class="link.classItem"><a :href="link.href">{{ link.name }}</a></li>
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
                headerLinks: [
                    {
                        href: "#",
                        classItem: "header__menu__item",
                        name: "Домой"

                    },
                    {
                        href: "#",
                        classItem: "header__menu__item",
                        name: "Проект"

                    },
                    {
                        href: "#",
                        classItem: "header__menu__item",
                        name: "Блог"

                    }
                ]
            }
        },
}
</script>

<style lang="sass" scoped>
    
</style>