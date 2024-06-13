<template>
        <div class="project__items">
                        <div class="project__item" v-for="item in projectList" :key="item.id">
                            <div class="project__item__img project__item__img_br-top-right">
                                <img :src="item.url" :alt="item.imgAlt">
                            </div>
                            <div class="project__item__text">
                                <div class="project__item__text-wrap">
                                    <p>{{ item.title }}</p>
                                    <p>Декор / Планировка</p>
                                </div>
                                <ButtonArrowRight />
                            </div>
                        </div>
                    </div>
</template>

<script>
import ButtonArrowRight from '../components/ButtonArrowRight.vue';

    export default {
        components: {
            ButtonArrowRight
        },
        name: 'project-list',
        props: {
            projectList: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>