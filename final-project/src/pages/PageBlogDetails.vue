<template>
    <div class="wrapper">
        <header-temp></header-temp>
        <main class="main">
            <section class="blog-details">
                <div class="blog-details__banner">
                </div>
            </section>
            <section class="blog-details-articles center">
                <div class="blog-details-articles__articles">
                    <template v-for="article in filter" :key="article.id">
                        <h2 class="heading">{{ article.title }}
                        </h2>
                        <img class="blog-details-articles__img" :src="article.img" alt="">
                        <div class="blog-details-articles__other">
                            <span class="blog-details-articles__date">{{ article.date }}</span>
                            <BreadCrumbs />
                        </div>
                        <p class="blog-details-articles__article"><a href="#">
                                {{ article.article }}
                            </a></p>
                        <blockquote class="quote text-center">
                            <IconQuote id="icon-quote" :width="100" :height="133" />
                            <p>цитата</p>
                        </blockquote>
                    </template>
                </div>
                <tags @ontags="filteredArticles"></tags>
            </section>
        </main>
        <footer-temp></footer-temp>
    </div>
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs.vue';
import IconQuote from '../components/icons/IconQuote.vue'
import Tags from '../blocks/TagsComp.vue'
export default {
    components: {
        IconQuote,
        BreadCrumbs,
        Tags
    },
    data() {
        return {
            tagName: "",
            blog: [
                {
                    id: 1,
                    img: "/img/blog1.png",
                    imgAlt: "blogImg",
                    title: "Создадим лучший макет перепланировки",
                    tag: "Планировка",
                    date: "26 Декабрь,2022 ",
                    article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque blanditiis placeat in ipsa ratione. Ut possimus aut delectus, maiores recusandae quisquam error voluptatum molestiae repudiandae eaque, tempore rem neque?"

                },
                {
                    id: 2,
                    img: "/img/blog2.png",
                    imgAlt: "blogImg",
                    title: "Лучшие интерьерные идеи по низкой цене",
                    tag: "Архитектура",
                    date: "22 декабрь,2022",
                    article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, est! In nihil ullam veniam est enim repellendus quaerat ut quas alias, sed expedita a vero quam beatae vel consequuntur iusto?"

                },
                {
                    id: 3,
                    img: "/img/blog3.png",
                    imgAlt: "blogImg",
                    title: "Лучшие интерьерные решения для офисов",
                    tag: "Планировка",
                    date: "25 Декабрь,2022",
                    article: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita architecto ducimus eius, corporis laboriosam nesciunt perspiciatis nostrum velit est magni animi nobis omnis exercitationem odit suscipit. Architecto porro debitis quam."

                },
                {
                    id: 4,
                    img: "/img/blog4.png",
                    imgAlt: "blogImg",
                    title: "Создадим лучший макет перепланировки",
                    tag: "Кухня",
                    date: "26 Декабрь,2023",
                    article: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, error? Quasi recusandae magni deleniti, expedita repellendus illum nulla doloremque aperiam neque! Optio libero eum et eligendi natus quod rem distinctio!"

                },
                {
                    id: 5,
                    img: "/img/blog5.png",
                    imgAlt: "blogImg",
                    title: "Лучшие интерьерные идеи по низкой цене",
                    tag: "Зал",
                    date: "22 Декабрь,2022",
                    article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis consequuntur ad hic unde obcaecati doloribus cum, soluta quaerat dolorum in culpa saepe recusandae nam modi sint magnam similique eaque!"

                },
                {
                    id: 6,
                    img: "/img/blog6.png",
                    imgAlt: "blogImg",
                    title: "Лучшие интерьерные решения для офисов",
                    tag: "Здание",
                    date: "25 Декабрь,2022",
                    article: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quas aliquid expedita rerum ullam eos numquam necessitatibus vero sed excepturi nisi fugiat explicabo voluptatem, quos corrupti alias labore nobis? Tempora!"

                },
                {
                    id: 7,
                    img: "/img/blog6.png",
                    imgAlt: "blogImg",
                    title: "Лучшие интерьерные решения для спален",
                    tag: "Спальня",
                    date: "25 Декабрь,2022",
                    article: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi officiis maiores, rem rerum porro quae beatae eaque nostrum sed excepturi cumque aut. Voluptatibus amet officiis repellendus quae ipsum esse!"

                }


            ],

        }
    },
    methods: {
        filteredArticles(tagName) {
            if (tagName) {
                this.tagName = tagName;
            }
        }
    },
    computed: {
        filter() {
            if (this.tagName) {
                return this.blog.filter(item => item.tag === this.tagName);
            } else {
                return this.blog
            }
        }
    }

}

</script>

<style lang="sass">

</style>