<template>
    <div class="container mx-auto text-center">
        <header class="text-center mt-8 ">
            <p class="mt-4">Ваши координаты: {{ dataGeoloc.lat }} : {{ dataGeoloc.lon }}</p>
            <div>
                <p class="mt-4"> Ваше местоположение {{ dataPosition.regionAll }}</p>
                <p>{{ dataPosition.city }}</p>
                <p> {{ dataPosition.regionId }}</p>
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
            type: Object,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped></style>