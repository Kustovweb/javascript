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
                                <div class="breadcrumbs">
                                    <a class="breadcrumbs__link" href="#">Интерьер</a>
                                    <a class="breadcrumbs__link" href="#">Домой</a>
                                    <a class="breadcrumbs__link" href="#">Декор</a>
                                </div>
                            </div>
                            <p class="blog-details-articles__article"><a href="#">
                                    {{ article.article }}
                                </a></p>
                            <blockquote class="quote text-center">
                                <svg class="quote__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path
                                        d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                                </svg>
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
export default {
    data() {
        return {
            tagName: "",
            blog: [
                {
                    id: 1,
                    img: "assets/img/blog1.png",
                    imgAlt: "blogImg",
                    title: "Создадим лучший макет перепланировки",
                    tag: "Планировка",
                    date: "26 Декабрь,2022 ",
                    article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque blanditiis placeat in ipsa ratione. Ut possimus aut delectus, maiores recusandae quisquam error voluptatum molestiae repudiandae eaque, tempore rem neque?"

                },
                {
                    id: 2,
                    img: "assets/img/blog2.png",
                    imgAlt: "blogImg",
                    title: "Лучшие интерьерные идеи по низкой цене",
                    tag: "Архитектура",
                    date: "22 декабрь,2022",
                    article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, est! In nihil ullam veniam est enim repellendus quaerat ut quas alias, sed expedita a vero quam beatae vel consequuntur iusto?"

                },
                {
                    id: 3,
                    img: "assets/img/blog3.png",
                    imgAlt: "blogImg",
                    title: "Лучшие интерьерные решения для офисов",
                    tag: "Планировка",
                    date: "25 Декабрь,2022",
                    article: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita architecto ducimus eius, corporis laboriosam nesciunt perspiciatis nostrum velit est magni animi nobis omnis exercitationem odit suscipit. Architecto porro debitis quam."

                },
                {
                    id: 4,
                    img: "assets/img/blog4.png",
                    imgAlt: "blogImg",
                    title: "Создадим лучший макет перепланировки",
                    tag: "Кухня",
                    date: "26 Декабрь,2023",
                    article: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, error? Quasi recusandae magni deleniti, expedita repellendus illum nulla doloremque aperiam neque! Optio libero eum et eligendi natus quod rem distinctio!"

                },
                {
                    id: 5,
                    img: "assets/img/blog5.png",
                    imgAlt: "blogImg",
                    title: "Лучшие интерьерные идеи по низкой цене",
                    tag: "Зал",
                    date: "22 Декабрь,2022",
                    article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis consequuntur ad hic unde obcaecati doloribus cum, soluta quaerat dolorum in culpa saepe recusandae nam modi sint magnam similique eaque!"

                },
                {
                    id: 6,
                    img: "assets/img/blog6.png",
                    imgAlt: "blogImg",
                    title: "Лучшие интерьерные решения для офисов",
                    tag: "Здание",
                    date: "25 Декабрь,2022",
                    article: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quas aliquid expedita rerum ullam eos numquam necessitatibus vero sed excepturi nisi fugiat explicabo voluptatem, quos corrupti alias labore nobis? Tempora!"

                },
                {
                    id: 7,
                    img: "assets/img/blog6.png",
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