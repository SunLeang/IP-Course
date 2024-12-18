<template>
  <RouterLink :to="'/categories/' + categoryId">
    <div class="category layout" :style="{ backgroundColor: color }">
      <img class="category img" :src="image" alt="pic" />
      <div>
        <div class="category title">{{ title }}</div>
        <div class="category item">{{ amount }} items</div>
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: ['title', 'amount', 'color', 'image', 'categoryId'],
}
</script>

<style>
.category {
  display: flex;
  flex-direction: column;
}
.category.layout {
  width: 115px;
  border-radius: 10px;
  border: 1px;
}

.category.img {
  width: 120px;
  height: 120px;
  top: -116px;
}

.category.title {
  font-family: Quicksand;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.0004em;
  text-align: center;
}

.category.item {
  color: #b6b6b6;
  font-family: Lato;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
}
</style>
