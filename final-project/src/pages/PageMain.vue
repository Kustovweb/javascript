<template>
         <div class="wrapper">
            <main class="main">
                <section class="banner center">
                    <div class="banner__content">
                        <h1 class="banner__content__h1">Пусть ваш дом<br> будет уникальным</h1>
                        <p class="banner__content__p">Существует много вариаций Lorem Ipsum, которые можно использовать
                        </p>
                        <button class="banner__btn">Начать <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                                    stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </section>
                <section class="project center">
                    <h2 class="project__heading text-center heading">Следите за нашими проектами</h2>
                    <p class="project__subheading text-center">Хорошо известно, что читатель будет отвлекаться на
                        читабельный
                        контент страницы
                    </p>
                    <div class="project__items">
                        <div class="project__item">
                            <div class="project__item__img project__item__img_br-top-right">
                                <img src="/img/project1.png" alt="">
                            </div>
                            <div class="project__item__text">
                                <div class="project__item__text-wrap">
                                    <p>Современная кухня</p>
                                    <p>Декор / Планировка</p>
                                </div>
                                <button class="btn project__btn"></button>
                            </div>
                        </div>
                        <div class="project__item">
                            <div class="project__item__img project__item__img_br-top-left">
                                <img src="/img/project2.png" alt="">
                            </div>
                            <div class="project__item__text">

                                <div class="project__item__text-wrap">
                                    <p>Современная кухня</p>
                                    <p>Декор / Планировка</p>
                                </div>
                                <button class="btn project__btn"></button>
                            </div>
                        </div>
                        <div class="project__item">
                            <div class="project__item__img project__item__img_br-bottom-right">
                                <img src="/img/project3.png" alt="">
                            </div>
                            <div class="project__item__text">

                                <div class="project__item__text-wrap">
                                    <p>Современная кухня</p>
                                    <p>Декор / Планировка</p>
                                </div>
                                <button class="btn project__btn"></button>
                            </div>
                        </div>
                        <div class="project__item">
                            <div class="project__item__img project__item__img_br-bottom-left">
                                <img src="/img/project4.png" alt="">
                            </div>
                            <div class="project__item__text">

                                <div class="project__item__text-wrap">
                                    <p>Современная кухня</p>
                                    <p>Декор / Планировка</p>
                                </div>
                                <button class="btn project__btn"></button>
                            </div>
                        </div>
                    </div>

                </section>
                <section class="counter">
                    <ul class="counter-list center">
                        <li class="counter-list__item">
                            <p class="counter-list__item__num">12</p>
                            <p class="counter-list__item__text">Лет опыта</p>
                        </li>
                        <li class="counter-list__item">
                            <p class="counter-list__item__num">85</p>
                            <p class="counter-list__item__text">Успешных проектов</p>
                        </li>
                        <li class="counter-list__item">
                            <p class="counter-list__item__num">15</p>
                            <p class="counter-list__item__text">Проектов в работе</p>
                        </li>
                        <li class="counter-list__item">
                            <p class="counter-list__item__num">95</p>
                            <p class="counter-list__item__text">Счастливых клиентов</p>
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
                    <div class="blog__items">
                        <div class="blog__item">
                            <div class="blog__item__img">
                                <img src="/img/blog1.png" alt="">
                            </div>
                            <div class="blog__item__subcontent">
                                <p class="blog__item__subcontent__text">Создадим лучший макет перепланировки</p>
                            </div>
                            <div class="blog__item__subcontent__date">
                                <span class="blog__item__subcontent__date__text">26 Декабрь,2022</span>
                                <button class="btn btn__date"></button>
                            </div>
                        </div>
                        <div class="blog__item">
                            <div class="blog__item__img">
                                <img src="/img/blog2.png" alt="">
                            </div>
                            <div class="blog__item__subcontent">
                                <p class="blog__item__subcontent__text">Создадим лучший макет перепланировки</p>
                            </div>
                            <div class="blog__item__subcontent__date">
                                <span class="blog__item__subcontent__date__text">26 Декабрь,2022</span>
                                <button class="btn btn__date"></button>
                            </div>
                        </div>
                        <div class="blog__item">
                            <div class="blog__item__img">
                                <img src="/img/blog3.png" alt="">
                            </div>
                            <div class="blog__item__subcontent">
                                <p class="blog__item__subcontent__text">Создадим лучший макет перепланировки</p>
                            </div>
                            <div class="blog__item__subcontent__date">
                                <span class="blog__item__subcontent__date__text">26 Декабрь,2022</span>
                                <button class="btn btn__date"></button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
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

<style lang="sass" scoped>
    
</style>