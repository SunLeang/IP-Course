<template>
    <div>
      <categories />
      <promotions />
    </div>

</template>

<script>
import { useProductStore } from './stores/product';
import { mapState } from 'pinia';
import Categories from './views/Categories.vue';
import Promotions from './views/Promotions.vue';


export default {
  setup() {
    const store = useProductStore()
    return {
      store
    }
  },
  components: {
    Categories,
    Promotions,
  },

  methods: {
    getQuantity() {
      return Math.floor(Math.random() * 100)
    },
    
  },
  data() {
    return {

  
  computed: {
    ...mapState(useProductStore, {
      popularProducts: 'getPopularProducts',
            categories(store) {
                return store.getCategoriesByGroup(this.currentGroupName);
            },
      promotions: "promotions",
      products: "products",
      groups: "groups",
    }),
  },

  async mounted() {
    await this.store.fetchProducts()
    await this.store.fetchGroups()
  }, 
}
  }
};
</script>