<template>
    <div class="banner-list">
        <Promotion
            v-for="(banner, index) in banners"
            :key = "index"
            :title = "banner.title"
            :description = "banner.description"
            :imgSrc = "banner.imgSrc"
            :bgcolor = "banner.bgcolor"
            :bgBtncolor = "banner.bgBtncolor"
            :label = "banner.label"
        />
    </div>
</template>

<script>
import Promotion from "@/components/Promotion.vue"

export default {
    components: {
        Promotion
    },
    data() {
        return {
            banners: [
                {
                    title: "Everyday Fresh & Clean with Our Products",
                    description: "",
                    imgSrc: "./images/promotions/onion.jpg",
                    bgcolor: "#F0E8D5",
                    bgBtncolor: "#36b37e",
                    label: "Shop Now",
                },
                {
                    title: "Make your Breakfast Healthy and Easy",
                    description: "",
                    imgSrc: "./images/promotions/strawberryjuice.png",
                    bgcolor: "#F3E8E8",
                    bgBtncolor: "#36b37e",
                    label: "Shop Now",
                },
                {
                    title: "The best Organic Products Online",
                    description: "",
                    imgSrc: "./images/promotions/organic.jpg",
                    bgcolor: "#E7EAF3",
                    bgBtncolor: "#36b37e",
                    label: "Shop Now",
                },
            ],
        };
    },
};
</script>

<style scoped>
.banner-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
} 


</style>