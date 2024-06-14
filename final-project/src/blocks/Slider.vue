<template>
    <swiper :spaceBetween="30" :pagination="{
        clickable: true,
    }" :modules="modules" class="mySwiper">
        <swiper-slide v-for="img of dataProjectList" :key="img.id">

            <img :src="img.url" :alt="imgAlt">
        </swiper-slide>
    </swiper>
</template>

<script>
import { mapGetters } from 'vuex/dist/vuex.cjs.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
    name: 'slider',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
    computed: {
        ...mapGetters(["dataProjectList"])
    }
}
</script>

<style lang="scss" scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        border-radius: 28px;
    }
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper {
    width: 100%;
    height: 30px;
    margin: 20px 0;
    position: relative;
}

.mySwiper {
    height: 800px;
}

.button__slider {
    position: absolute;
    content: '';
    width: 132px;
    height: 132px;
    background-color: #fff;
    border-radius: 50px;
    top: 50%;
    left: 50%;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
