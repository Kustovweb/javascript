<template>
    <button class="btn">
        <icon-right></icon-right>
    </button>
</template>

<script>
export default {
    name: 'button-right'
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
    padding: 26px 26px
    border: none
    cursor: pointer
    background-color: #F4F0EC
    position: relative
    transition: color .3s ease
</style>