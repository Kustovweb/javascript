<template>
    <ul>
        <li class="menu__item"><router-link to="/">Домой</router-link></li>
        <li class="menu__item"><router-link to="/blog">Блог</router-link></li>
        <li class="menu__item"><router-link to="/project">Проект</router-link></li>
    </ul>
</template>

<script>
export default {
    name: 'menu-list'
}
</script>

<style lang="scss" scoped></style>