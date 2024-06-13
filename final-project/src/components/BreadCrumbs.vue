<template>
    <div class="breadcrumbs" :style="{ justifyContent: justify }">
        <a class="breadcrumbs__link" href="#">Интерьер</a>
        <a class="breadcrumbs__link" href="#">Домой</a>
        <a class="breadcrumbs__link" href="#">Декор</a>
    </div>
</template>

<script>
export default {
    name: 'bread-crumbs',
    props: {
        justify: {
            type: String,
            default: "center"
        }
    }
}
</script>

<style lang="scss" scoped></style>