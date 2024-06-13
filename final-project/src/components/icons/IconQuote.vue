<template>
    <svg :id="iconName" :width="width" :height="height" :fill="iconColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
</template>

<script>
export default {
    name: 'icon-quote',
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

<style lang="sass" scoped>
    svg
        transform: rotate(180deg)
</style>