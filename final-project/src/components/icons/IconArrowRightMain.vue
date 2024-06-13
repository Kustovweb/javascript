<template>
   <svg :id="iconName" :width="width" :height="height" viewBox="0 0 18 17" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
    :stroke="iconColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
    </svg>
</template>

<script>
    export default {
        props: {
            iconName: {
                type: String,
                default: 'box'
            },
            width: {
                type: [Number, String],
                default: 34
            },
            height: {
                type: [Number, String],
                default: 34
            },
            iconColor: {
            type: String,
            default: '#CDA274'
    }
        }
    }
</script>

<style lang="scss" scoped>

</style>