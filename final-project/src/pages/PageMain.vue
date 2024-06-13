<template>
    <div class="wrapper">
        <main class="main">
            <section class="banner center">
                <div class="banner__content">
                    <h1 class="banner__content__h1">Пусть ваш дом<br> будет уникальным</h1>
                    <p class="banner__content__p">Существует много вариаций Lorem Ipsum, которые можно использовать
                    </p>
                    <ButtonMain title="Начать" />
                </div>
            </section>
            <section class="project center">
                <h2 class="project__heading text-center heading">Следите за нашими проектами</h2>
                <p class="project__subheading text-center">Хорошо известно, что читатель будет отвлекаться<br> на
                    читабельный
                    контент страницы
                </p>
                <ProjectList :project-list="projectList" />
            </section>
            <section class="counter">
                <ul class="counter-list center">
                    <li class="counter-list__item" v-for="count, index in counterList" :key="index">
                        <p class="counter-list__item__num">{{ count.num }}</p>
                        <p class="counter-list__item__text">{{ count.text }}</p>
                    </li>
                </ul>
            </section>
            <section class="blog center">
                <div class="blog__heading text-center">
                    <h2 class="blog__heading__title">Статьи &amp;<br> Новости</h2>
                    <p class="blog__heading__subtitle">Хорошо известно, что читатель будет отвлекаться на
                        читабельный
                        контент
                        страницы</p>
                </div>
                <BlogList :blogList="blog" />
            </section>
        </main>
    </div>
</template>


<script>
import BlogList from '../blocks/BlogList.vue';
import ProjectList from '../blocks/ProjectList.vue';
import ButtonMain from '../components/ButtonMain.vue';

export default {
    components: {
        ButtonMain,
        ProjectList,
        BlogList
    },
    data() {
        return {
            counterList: [
                {
                    num: 12,
                    text: "Лет опыта"
                },
                {
                    num: 85,
                    text: "Успешных проектов"
                },
                {
                    num: 15,
                    text: "Проектов в работе"
                },
                {
                    num: 95,
                    text: "Счастливых клиентов"
                },

            ],


        }
    },

}
</script>

<style lang="sass" scoped>

</style>