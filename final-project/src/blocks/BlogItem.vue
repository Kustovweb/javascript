<template>
    <div class="blog__item">
        <div class="blog__item__img">
            <img :src="blogItem.img" alt="">
        </div>
        <div class="blog__item__subcontent">
            <p class="blog__item__subcontent__text">{{ blogItem.title }}</p>
        </div>
        <div class="blog__item__subcontent__date">
            <span class="blog__item__subcontent__date__text">26 Декабрь,2022</span>
            <router-link to="/blogDetails">
                <ButtonArrowRight width="52px" height="52px" :iconWidth="5" :iconHeght="13" classItem="active" />
            </router-link>

        </div>
    </div>
</template>

<script>
import ButtonArrowRight from '../components/ButtonArrowRight.vue';


export default {
    components: {
        ButtonArrowRight
    },
    props: {
        blogItem: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped></style>