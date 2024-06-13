<template>
    <svg :id="iconName" :width="width" :height="height" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 19L9 10L1 1" :stroke="iconColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script>
    export default {
        name: 'icon-right',
        props: {
            iconName: {
                type: String,
                default: 'box'
            },
            width: {
                type: [Number, String],
                default: 10
            },
            height: {
                type: [Number, String],
                default: 20
            },
            iconColor: {
                type: String,
                default: '#292F36'
    }
        }
    }
</script>