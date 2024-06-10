<template>
   <header class="header center">
        <div class="header__left">
            <a class="logo" href="#"><img src="/img/logo.svg" alt="" width="34"
                    height="34"><span>Interno</span></a>
        </div>
        <div class="header__right">
            <ul class="header__menu">
                <li v-for="link in headerLinks" :key="link" :class="link.classItem"><a :href="link.href">{{ link.name }}</a></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
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