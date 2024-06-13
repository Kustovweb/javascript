<template>

    <div class="wrapper">
        <header-temp></header-temp>
        <main class="main">
            <section class="blog__banner">
                <div class="blog__intro">
                    <h2 class="heading">Статьи &amp;<br> Новости</h2>
                    <div class="blog__breadcrumbs text-center">
                        <p><a href="#">Домой /</a></p>
                        <p><a href="#">Блог</a></p>
                    </div>
                </div>
            </section>
            <section class="posts center">
                <div class="post__latest">
                    <h3 class="heading">Последний пост</h3>
                    <div class="posts__content">
                        <img src="/img/posts1.png" alt="posts" class="posts__img">
                        <div class="posts__subcontent">
                            <h2 class="posts__title">Low Cost Latest Invented Interior Designing Ideas</h2>
                            <div class="posts__text">С&nbsp;того времени этот, похожий на&nbsp;латинский, текст стал
                                стандартом в&nbsp;печатной промышленности для примеров шрифтов и&nbsp;текстов. Перед
                                появлением электронных издательств дизайнеры импровизировали в&nbsp;работе над
                                макетами, изображая текст при помощи волнистых линий. С&nbsp;появлением
                                самоклеющихся наклеек с&nbsp;напечатанным текстом &laquo;Lorem ipsum&raquo; появился
                                более реалистичный способ обозначения расположения текста на&nbsp;странице.</div>
                            <div class="posts__other">
                                <span class="posts__date">26 December,2022</span>
                                <button class="btn posts__btn"><svg width="6" height="13" viewBox="0 0 10 20"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="blog center">
                <div class="blog__items">
                    <template v-for="item, key of blog" :key="key">
                        <div class="blog__item">
                            <div class="blog__item__img">
                                <img :src="item.img" :alt="item.imgAlt">
                                <p class="blog__tag">{{ item.tag }}</p>
                            </div>
                            <div class="blog__item__subcontent">
                                <p class="blog__item__subcontent__text">{{ item.text }}</p>
                            </div>
                            <div class="blog__item__subcontent__date">
                                <span class="blog__item__subcontent__date__text">{{ item.date }}</span>
                                <button class="btn btn__date"></button>
                            </div>
                        </div>
                    </template>
                </div>
            </section>
            <PaginationComp />
        </main>
        <footer-temp></footer-temp>
    </div>

</template>

<script>
import PaginationComp from '../components/PaginationComp.vue';

export default {
    components: PaginationComp,
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

<<style lang="sass">

    </style>>