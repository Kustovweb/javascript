<template>

    <div class="wrapper">
        <HeaderComp />
        <main class="main">
            <section class="blog__banner">
                <div class="blog__intro">
                    <h2 class="heading">Статьи &amp;<br> Новости</h2>
                    <BreadCrumbs />
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
                    <template v-for="item, key of getDataBlog" :key="key.id">
                        <div class="blog__item">
                            <div class="blog__item__img">
                                <img :src="item.img" :alt="item.imgAlt">
                                <p class="blog__tag">{{ item.tag }}</p>
                            </div>
                            <div class="blog__item__subcontent">
                                <p class="blog__item__subcontent__text">{{ item.title }}</p>
                            </div>
                            <div class="blog__item__subcontent__date">
                                <span class="blog__item__subcontent__date__text">{{ item.date }}</span>
                                <ButtonArrowRight classItem="active" />
                            </div>
                        </div>
                    </template>
                </div>
            </section>
            <PaginationComp />
        </main>
        <FooterComp />
    </div>

</template>

<script>
import FooterComp from '../blocks/FooterComp.vue';
import HeaderComp from '../blocks/HeaderComp.vue';
import BannerComp from '../components/BannerComp.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import ButtonArrowRight from '../components/ButtonArrowRight.vue';
import PaginationComp from '../components/PaginationComp.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        PaginationComp,
        HeaderComp,
        FooterComp,
        BannerComp,
        BreadCrumbs,
        ButtonArrowRight
    },
    data() {
        return {
        }
    },
    methods: {

    },
    computed: {
        ...mapGetters(["getDataBlog"]),
    }
}
</script>

<<style lang="sass">
    </style>>