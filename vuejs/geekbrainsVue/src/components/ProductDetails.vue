<template>
    <div class="product">
        <p class="name">Name: {{ product.name }}</p>
        <p class="price">Price: {{ formattedPrice }}</p>
        <p class="success" v-if="product.available">Available</p>
        <p class="error" v-else>Out of stock</p>
    </div>
</template>

<script>
    export default {
        name: 'product-details',
        data() {
            return {
                product: 
                    {
                        name: "Клавиатура Razer Ornata v2",
                        price: 99.99,
                        available: true
                    }
                
            }
        },
        computed: {
            formattedPrice() {
                return '$' + String(this.product.price);
            }
        }
    }
</script>

<style lang="css" scoped>
    .product {
        border: 2px solid #ccc;
        padding: 10px 30px;
        border-radius: 28px;
    }
    .error {
        color: red;
        font-size: 18px;
    }
    .success {
        color: green;
        font-size: 18px;
    }

</style>