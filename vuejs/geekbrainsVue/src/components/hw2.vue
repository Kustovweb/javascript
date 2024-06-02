<script>
export default {
    data() {
        return {
            products: [
                {
                    id: 0,
                    name: "bread",
                    price: 55
                },
                {
                    id: 1,
                    name: "oil",
                    price: 130
                },
                {
                    id: 3,
                    name: "pasta",
                    price: 95
                },
                {
                    id: 4,
                    name: "tea",
                    price: 250
                }
            ]
        }
    },
    methods: {
        sortedAsc() {
            this.products.sort((priceA, priceB) => {
                return priceA.price > priceB.price;
            })
        },
        sortedDesc() {
            this.products.sort((priceA, priceB) => {
                return priceA.price < priceB.price;
            })
        }
    }
}
</script>

<template>

    <div class="products">
        <ul class="product" v-for="item in products" :key="item.id">
            <li class="product__item">{{ item.name }} : {{ item.price }}</li>
        </ul>
        <button class="btn" @click="sortedAsc" id="asc">Сортировать &#11015;</button>
        <button class="btn" @click="sortedDesc" id="desc">Сортировать &#11014;</button>
    </div>

</template>





<style scoped>
    .product {
        list-style: none;
        font-size: 18px;
        padding: 0;
    }
</style>

<!-- *Часть 2. Задание Vue**
Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию). -->
