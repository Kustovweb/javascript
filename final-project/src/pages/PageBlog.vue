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
                                    <p class="blog__tag">{{item.tag}}</p>
                                </div>
                                <div class="blog__item__subcontent">
                                    <p class="blog__item__subcontent__text">{{item.text}}</p>
                                </div>
                                <div class="blog__item__subcontent__date">
                                    <span class="blog__item__subcontent__date__text">{{item.date}}</span>
                                    <button class="btn btn__date"></button>
                                </div>
                            </div>
                        </template>
                    </div>
                </section>
                <div class="pagination center">
                    <div class="pagination__page pagination__page_num"></div>
                    <div class="pagination__page pagination__page_num"></div>
                    <div class="pagination__page pagination__page_num"></div>
                    <div class="pagination__page pagination__page_arrow-right"></div>
                </div>
            </main>
            <footer-temp></footer-temp>
        </div>
    
</template>