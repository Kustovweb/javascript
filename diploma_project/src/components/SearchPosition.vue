<template>
    <div class="container mx-auto text-center">
        <header class="text-center mt-8 ">
            <p class="mt-4">Ваши координаты: {{ getLocation.lat }} : {{ getLocation.lon }}</p>
            <div>
                <p class="mt-4"> Ваше местоположение {{ getPosition.regionAll }}</p>
                <p>{{ getPosition.city }}</p>
                <p> {{ getPosition.regionId }}</p>
            </div>
        </header>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'SearchNavBar',
    computed: mapGetters(['getLocation', 'getPosition'])
}
</script>

<style lang="scss" scoped></style>