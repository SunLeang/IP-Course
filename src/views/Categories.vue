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
                        bgcolor: "",
                    },
                    {
                        title: "Peach",
                        items: 17,
                        imgSrc: "./images/categories/peach.png",
                        bgcolor: "",
                    },
                    {
                        title: "Organic Kiwi",
                        items: 21,
                        imgSrc: "./images/categories/kiwi.png",
                        bgcolor: "",
                    },
                    {
                        title: "Red Apple",
                        items: 25,
                        imgSrc: "./images/categories/apple.png",
                        bgcolor: "",
                    },
                    {
                        title: "Snack",
                        items: 34,
                        imgSrc: "./images/categories/snack.png",
                        bgcolor: "",
                    },
                    {
                        title: "Black Plum",
                        items: 63,
                        imgSrc: "./images/categories/blackplum.png",
                        bgcolor: "",
                    },
                    {
                        title: "Vegetable",
                        items: 53,
                        imgSrc: "./images/categories/vegetables.png",
                        bgcolor: "",
                    },
                    {
                        title: "Headphone",
                        items: 25,
                        imgSrc: "./images/categories/headphone.png",
                        bgcolor: "",
                    },
                    {
                        title: "Cake and Milk",
                        items: 53,
                        imgSrc: "./images/categories/cake&milk.png",
                        bgcolor: "",
                    },
                    {
                        title: "Orage",
                        items: 63,
                        imgSrc: "./images/categories/orange.png",
                        bgcolor: "",
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