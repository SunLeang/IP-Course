<template>
    <div :style="{backgroundColor: bgcolor}" class="promotion">
        <div class="Banners">
            <h2>{{ title }}</h2>
            <buttons :bgBtncolor="bgBtncolor" :label="label" @click="HandleClick" />
        </div>
        <div class="banner-img">
            <img :src="imgSrc" :alt="title" class="banner-image">
        </div>
    </div>
</template>

<script>
import Buttons from './Buttons.vue';

    export default {
        components: {
            Buttons
        },

        props: {
            title: String,
            label: String,
            imgSrc: String,
            bgcolor: String,
            bgBtncolor: String,
        },

        methods: {
            HandleClick() {
                alert("Let's shop: " + this.title);
            }
        },
    };
</script>

<style scoped>

.promotion {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 500px;
    height: 300px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    margin: 10px;
}

.Banners {
    width: inherit;
    height: 60%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
}

.banner-img {
    height: 300px;
    display: flex;
    align-items: end;
}

.banner-image {
    width: 200px;
    height: 190px;
    margin-right: 20px;
}

button {
        width: 55%;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: center;
        padding: 8px 16px;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

</style>