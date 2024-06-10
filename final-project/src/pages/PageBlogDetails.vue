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
    
}
</script>

<style lang="sass">
    
</style>