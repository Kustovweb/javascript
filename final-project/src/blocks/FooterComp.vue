<template>
    <footer class="footer center">
        <div class="footer__interno">
            <div class="footer__logo">
                <router-link to="/" class="logo">
                    <IconLogo /><span>Interno</span>
                </router-link>

            </div>
            <div class="footer__socials">
                <a href="#" class="footer__icon__twitter">
                    <twitter-icon></twitter-icon>
                </a>
                <a href="#" class="footer__icon__linkedin">
                    <linkedin-icon></linkedin-icon>
                </a>
            </div>
        </div>
        <div class="footer__pages">
            <p class="footer__pages__title">Страницы</p>
            <MenuComp class="menu-footer" />
        </div>
        <div class="footer__contact">
            <p class="footer__contact__title">Контакты</p>
            <address class="footer__contact__address">
                <span>55 East Birchwood Ave.<br>Brooklyn, New York 11201</span><br>
                <span class="footer__contact__item"> <a
                        href="mailto:contact@interno.com">contact@interno.com</a></span><br>
                <span class="footer__contact__item"><a href="tel:(123) 456 - 7890">(123) 456 - 7890</a></span>
            </address>

        </div>
    </footer>
</template>

<script>
import IconLogo from '../components/icons/IconLogo.vue'
import MenuComp from '../components/MenuComp.vue';
export default {
    name: 'footer-temp',
    components: {
        IconLogo,
        MenuComp
    }

}
</script>

<style lang="sass" scoped>
.menu-footer
    display: flex
    flex-flow: column wrap
    align-items: flex-start
    padding: 0
    gap: 20px
    font-size: 20px
    list-style: none
.menu__item


</style>