<template>
    <button class="btn" :style="buttonStyle" :class="classItem">
        <IconArrowRight icon-name="arrow-right" :width="iconWidth" :height="iconHeght"/>
    </button>
</template>

<script>
import IconArrowRight from './icons/IconArrowRight.vue'
export default {
    name: 'button-right',
    components: {
        IconArrowRight
    },
    data() {
        return {
            buttonStyle: {
                width: this.width,
                height: this.height,
            }
        }
    },
    props: {
        width: {
            type: [Number, String],
            default: 70
        },
        height: {
            type: [Number, String],
            default: 70
        },
        iconWidth: {
            type: [Number, String]
        },
        iconHeght: {
            type: [Number, String]
        },
        classItem: {
            type: String,
        }

    }
}
</script>

<style lang="sass">
.btn
    display: flex
    justify-content: center
    align-items: center
    border-radius: 50%
    width: 70px
    height: 70px
    border: none
    cursor: pointer
    background-color: #F4F0EC
    position: relative
    transition: all .3s ease
</style>