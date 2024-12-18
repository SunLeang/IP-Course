<template>
    <div class="h-[235px] bg-[#d6fae9] flex m-[50px] rounded-2xl">
      <img src="@/assets/images/cool-bg1.png" alt="pic" class="absolute" />
      <img
        src="@/assets/images/cool-bg2.png"
        alt="pic"
        class="absolute left-[600px]"
      />
  
      <div class="flex flex-col justify-center mx-12">
        <div class="text-[48px] font-semibold">
          {{ Categories[categoryId].name }}
        </div>
        <Navigatebar
          first="Home"
          second="Categories"
          :third="Categories[categoryId].name"
        />
      </div>
    </div>
  </template>
  <script>
  import Categories from '@/components/Categories.vue'
  import Navigatebar from '@/components/SubComponents/Navigatebar.vue'
  import { useProductStore } from '@/stores/product'
  import { mapState } from 'pinia'
  
  export default {
    props: { categoryId: Number },
    components: { Navigatebar },
    computed: {
      ...mapState(useProductStore, { Categories: 'categories' }),
    },
  }
  </script>
  <style lang=""></style>
  