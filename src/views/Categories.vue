<template>
    <div class="product-list">
        <Category
        v-for = "(product, index) in products"
            :key = "index"
            :title = 'product.title'
            :items = "product.items"
            :imgSrc = "product.imgSrc"
            :bgcolor = "product.bgcolor"
        />

    </div>
</template>

<script>

import Category from '@/components/Category.vue';

    export default {
        components: {
            Category,
        },

        data () {
            return {
                products: [
                    {
                        title: "Burger",
                        items: 14,
                        imgSrc: "./images/categories/burger.png",
                        bgcolor: "#f2fce4",
                    },
                    {
                        title: "Peach",
                        items: 17,
                        imgSrc: "./images/categories/peach.png",
                        bgcolor: "#FFFCEB",
                    },
                    {
                        title: "Organic Kiwi",
                        items: 21,
                        imgSrc: "./images/categories/kiwi.png",
                        bgcolor: "#ecffec",
                    },
                    {
                        title: "Red Apple",
                        items: 25,
                        imgSrc: "./images/categories/apple.png",
                        bgcolor: "#feeefa",
                    },
                    {
                        title: "Snack",
                        items: 34,
                        imgSrc: "./images/categories/snack.png",
                        bgcolor: "fff3eb",
                    },
                    {
                        title: "Black Plum",
                        items: 63,
                        imgSrc: "./images/categories/blackplum.png",
                        bgcolor: "#fff3ff",
                    },
                    {
                        title: "Vegetable",
                        items: 53,
                        imgSrc: "./images/categories/vegetables.png",
                        bgcolor: "#f2fce4",
                    },
                    {
                        title: "Headphone",
                        items: 25,
                        imgSrc: "./images/categories/headphone.png",
                        bgcolor: "#fffceb",
                    },
                    {
                        title: "Cake and Milk",
                        items: 53,
                        imgSrc: "./images/categories/cake&milk.png",
                        bgcolor: "#f2fce4",
                    },
                    {
                        title: "Orage",
                        items: 63,
                        imgSrc: "./images/categories/orange.png",
                        bgcolor: "#fff3ff",
                    },
                ]
            }
        }
    };
</script>

<style scoped>

.product-list {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
}

.category-img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    margin-bottom: 8px;
}


</style>