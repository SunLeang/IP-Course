<template>
    <div :style = "{backgroundColor: bgcolor}" class="category">
        <img :src="imgSrc" :alt="title" class="category-img" />
        <h3>{{ title }}</h3>
        <p> {{ items }} items </p>
    </div>
</template>

<script>
    export default{
        props: {
            title: String,
            items: Number,
            imgSrc: String,
            bgcolor: String,
        },
    };
</script>

<style scoped>

.category {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 140px;
    padding: 10px;
    background-color: #f0f2f5;
    border-radius: 10px;
    margin: 10px;
}

.category p {
    color: gray;
}

.category-img {
    width: 100px;
    height: 100px;
    margin: 0.5rem;
}

</style>