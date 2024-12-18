<template>
  <router-view>
    <div class="main">
      <Tabbar />
      <Hero />

      <Menu @categorySelected="filterByCategory" title="Featured Categories" />

      <br />
      <div class="category">
        <div v-if="categoriesLoading">Loading Categories...</div>
        <div v-else style="display: flex; gap: 11px">
          <div
            style="display: inline-flex"
            v-for="category in Categories"
            :key="category"
          >
            <Categories
              :categoryId="category.id - 1"
              :title="category.name"
              :amount="category.productCount"
              :color="category.color"
              :image="category.image"
            />
          </div>
        </div>
      </div>

      <br /><br /><br />
      <div class="promotion">
        <div v-if="promotionsLoading">Loading Promotions...</div>
        <div v-else style="display: flex; gap: 10px">
          <div v-for="promotion in Promotions" :key="promotion">
            <Promotion
              :title="promotion.title"
              :buttonColor="promotion.buttonColor"
              :color="promotion.color"
              :imgURL="promotion.image"
            />
          </div>
        </div>
      </div>

      <br /><br />
      <Menu @categorySelected="filterByCategory" title="Popular Products" />
      <Product />
    </div>
  </router-view>
</template>

<script>
import Promotion from '../components/Promotion.vue'
import Categories from '../components/Categories.vue'
import { useProductStore } from '../stores/product'
import { mapState } from 'pinia'
import Menu from '../components/Menu.vue'
import Product from '../components/Product.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'App',
  components: { Categories, Promotion, Menu, Product, Hero },

  data() {
    return {
      currentGroupName: 'Fruits',
      currentCategoryId: 5,
      categoriesLoading: false,
      promotionsLoading: false,
    }
  },

  methods: {},

  computed: {
    ...mapState(useProductStore, {
      Categories: 'categories',
      Promotions: 'promotions',
      Products: 'products',
      Groups: 'groups',

      categoriesByGroup(store) {
        const filteredCategories = store.getCategoriesByGroup(
          this.currentGroupName,
        )
        console.log('Categories byGroupName: ', filteredCategories)
        return filteredCategories
      },

      productsByGroup(store) {
        const filteredProducts = store.getProductsByGroup(this.currentGroupName)
        console.log('Products byGroupName: ', filteredProducts)
        return filteredProducts
      },

      productsByCategory(store) {
        const filteredProducts = store.getProductsByCategory(
          this.currentCategoryId,
        )
        console.log('Products byCategoryId: ', filteredProducts)
        return filteredProducts
      },

      popularProducts(store) {
        // const popularProducts = store.products.filter((product) => product.countSold > 10)
        const popularProducts = store.getPopularProducts
        console.log('Popular Products: ', popularProducts)
        return popularProducts
      },
    }),
  },
}
</script>

<style>
.main {
  display: block;
  margin: 0px 50px 0px 50px;
}

.category {
  display: flex;
}

.promotion {
  display: flex;
  gap: 25px;
}
</style>
