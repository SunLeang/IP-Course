<template>
  <RouterLink
    to="/products/1"
    class="banner-layout"
    :style="{ backgroundColor: color }"
  >
    <div class="content-layout">
      <div class="title">{{ title }}</div>
      <Button :buttonColor="buttonColor" @click="shopNow()" />
    </div>

    <div class="img-layout">
      <img :src="imgURL" alt="pic" />
    </div>
  </RouterLink>
</template>

<script>
import Button from './Button.vue'

export default {
  components: { Button },
  props: ['title', 'imgURL', 'color', 'buttonColor'],
  methods: {
    shopNow() {
      alert("Let's shop: " + this.title)
    },
  },
}
</script>

<style>
.banner-layout {
  width: 100%;
  max-width: 512px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
}

.img-layout {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-layout img {
  width: 100%;
  height: 250px;
  object-fit: contain;
  align-self: flex-end; /* make it go bottom */
}

.content-layout {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  gap: 10px;
  justify-content: center;
}

.title {
  font-family: Quicksand, sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  color: #333;
}
</style>
