<template>
   <svg :id="iconName" :width="width" :height="height" viewBox="0 0 17 16" :fill="iconColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.14062 16H0.871094V5.48828H4.14062V16ZM2.48828 4.08203C1.    46875 4.08203 0.625 3.20312 0.625 2.14844C0.625 1.12891 1.46875 0.  285156 2.48828 0.285156C3.54297 0.285156 4.38672 1.12891 4.38672 2.   14844C4.38672 3.20312 3.54297 4.08203 2.48828 4.08203ZM16.3398 16H13.  1055V10.9023C13.1055 9.67188 13.0703 8.125 11.3828 8.125C9.69531 8.125    9.44922 9.42578 9.44922 10.7969V16H6.17969V5.48828H9.30859V6.92969H9.  34375C9.80078 6.12109 10.8555 5.24219 12.4375 5.24219C15.7422 5.24219     16.375 7.42188 16.375 10.2344V16H16.3398Z" fill="#292F36"/>
</svg>

</template>

<script>
    export default {
        name: 'linkedin-icon',
        props: {
            iconName: {
                type: String,
                default: 'box'
            },
            width: {
                type: [Number, String],
                default: 17
            },
            height: {
                type: [Number, String],
                default: 17
            },
            iconColor: {
            type: String,
            default: 'currentColor'
    }
        }
    }
</script>

<style lang="scss" scoped>

</style>