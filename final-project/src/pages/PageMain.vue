<template>
    <main class="main">
        <section class="page-main center">
            <div class="banner__main">
                <div class="banner__content">
                    <h1 class="banner__content__h1">Пусть ваш дом<br> будет уникальным</h1>
                    <p class="banner__content__p">Существует много вариаций Lorem Ipsum, которые можно использовать
                    </p>
                    <a href="#linkProject">
                        <ButtonMain title="Начать" />
                    </a>
                </div>
            </div>
        </section>
        <section class="project center">
            <h2 class="project__heading text-center heading">Следите за нашими проектами</h2>
            <p class="project__subheading text-center">Хорошо известно, что читатель будет отвлекаться<br> на
                читабельный
                контент страницы
            </p>
            <div id="linkProject" class="project__items">
                <div class="project__item" v-for="item in dataProjectList" :key="item.id">
                    <div class="project__item__img project__item__img_br-top-right">
                        <img :src="item.url" :alt="item.imgAlt">
                    </div>
                    <div class="project__item__text">
                        <div class="project__item__text-wrap">
                            <p>{{ item.title }}</p>
                            <p>Декор / Планировка</p>
                        </div>
                        <router-link to="/project">
                            <ButtonArrowRight />
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="counter">
            <ul class="counter-list center">
                <li class="counter-list__item" v-for="count, index in getDataCounterMain" :key="index">
                    <p class="counter-list__item__num">{{ count.num }}</p>
                    <p class="counter-list__item__text">{{ count.text }}</p>
                </li>
            </ul>
        </section>
        <section class="blog center">
            <div class="blog__heading text-center">
                <h2 class="blog__heading__title">Статьи &amp;<br> Новости</h2>
                <p class="blog__heading__subtitle">Хорошо известно, что читатель будет отвлекаться<br> на
                    читабельный
                    контент
                    страницы</p>
            </div>
            <BlogList :blogData="blogListCounter" />
        </section>
    </main>
</template>


<script>
import { mapGetters } from 'vuex/dist/vuex.cjs.js';
import BlogList from '../blocks/BlogList.vue';
import ProjectList from '../blocks/ProjectList.vue';
import ButtonMain from '../components/ButtonMain.vue';
import ButtonArrowRight from '../components/ButtonArrowRight.vue';

export default {
    components: {
        ButtonMain,
        ProjectList,
        BlogList,
        ButtonArrowRight
    },
    data() {
        return {
            countArticleBlog: 3,
        }
    },
    computed: {
        ...mapGetters(['getDataCounterMain', 'getDataBlog', 'dataProjectList']),
        blogListCounter() {
            if (this.getDataBlog.length > 0) {
                return this.getDataBlog.slice(0, this.countArticleBlog)
            }
        },
    }

}
</script>

<style lang="sass" scoped>
    .banner__main 
        background-image: url(./img/banner.png)
        background-size: cover
        background-repeat: no-repeat
        min-height: 758px
        border-radius: 28px
        display: flex
        align-items: center
        margin-top: 57px
    .banner__main
        padding-left: 52px
    .banner__content__h1
        font-size: 65px
        font-weight: 400
        
</style>