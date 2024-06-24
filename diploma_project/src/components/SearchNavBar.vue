<template>
    <div class="container mx-auto text-center">
        <header class="text-center mt-8 ">
            <p class="mt-4">Ваши координаты: {{ dataGeoloc.lat }} : {{ dataGeoloc.lon }}</p>
            <div v-for="item, index in dataPosition.suggestions" :key="index">
                <p class="mt-4"> Ваше местоположение {{ item.value }}</p>
                <p>{{ item.data.region_kladr_id }}</p>
                <p> {{ item.data.area }}</p>
            </div>
        </header>

    </div>
</template>

<script>
export default {
    name: 'SearchNavBar',
    props: {
        dataGeoloc: {
            type: Object,
            required: true
        },
        dataPosition: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped></style>