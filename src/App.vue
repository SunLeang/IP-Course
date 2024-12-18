<template>
  <AppHeader />
  <router-view />
</template>
<script>
import AppHeader from './components/AppHeader.vue'
import { useProductStore } from './stores/product'
import HomeView from './views/HomeView.vue'

export default {
  components: { AppHeader, HomeView },

  setup() {
    const store = useProductStore()
    return {
      store,
    }
  },

  async mounted() {
    await this.store.fetchCategories().then(() => {
      this.categoriesLoading = false
    })
    await this.store.fetchPromotions().then(() => {
      this.promotionsLoading = false
    })
    await this.store.fetchProducts().then(() => {
      this.productsLoading = false
    })
    await this.store.fetchGroups().then(() => {
      this.groupsLoading = false
    })
  },
}
</script>
<style></style>
