<template>
  <div class="h-[50px] border-y flex items-center text-sm justify-between">
    <button class="bg-[#3BB77E] h-[30px] text-white text-sm px-2">
      <i class="fa-brands fa-figma"></i>
      Browse All Categories
    </button>

    <div class="flex gap-4 ml-10 cursor-pointer">
      <div class="flex">
        <i class="fa-solid fa-fire mt-[3px] mx-1" style="color: #3bb77e"></i>
        <RouterLink to="/categories/0">Hot Deals</RouterLink>
      </div>

      <div
        v-for="(title, index) in titles"
        :key="index"
        @click="handleNav(index + 1)"
      >
        {{ title }}
      </div>
    </div>

    <div class="flex">
      <i class="fa-solid fa-headphones-simple fa-2xl mt-3 p-2"></i>
      <div class="text-center">
        <div class="text-[#3BB77E] text-lg font-semibold">099 777 888</div>
        <div class="text-gray-500 text-[10px] leading-[0.5rem]">
          24/7 Support Center
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      titles: [
        'Home',
        'Food',
        'Vegetables',
        'Drink',
        'Cookie',
        'Meat & Seafood',
        'Bakery',
      ],
    }
  },
  methods: {
    handleNav(index) {
      this.$router.push('/categories/' + index)
    },
  },
}
</script>
<style></style>
