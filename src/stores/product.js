import { defineStore } from 'pinia'
import axios from "axios"

export const useProductStore = defineStore('product', {
    state: () => ({
        groups: [],
        promotions: [],
        categories: [],
        products: []
    }),
    getters: {
        getCategoriesByGroup: (state) => {
            return (groupName) => state.categories.filter(category => category.group === groupName);
        },
        getProductsByGroup: (state) => {
            return (groupName) => state.products.filter(product => product.group === groupName);
        },
        getProductsByCategory: (state) => {
            return (categoryId) => state.products.filter(product => product.categoryId === categoryId);
        },
        getPopularProducts: (state) => {
            return state.products.filter(product => product.countSold > 10);
        }
    },
    actions: {
      async fetchCategories() {
        try {
            const response = await axios.get("http://localhost:3000/api/categories");
            this.categories = response.data;
            console.log("Categories fetched:", this.categories);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    },

      async fetchPromotions() {
          try {
              const response = await axios.get("http://localhost:3000/api/promotions");
              this.promotions = response.data;
              console.log("Promotions fetched:", this.promotions);
          } catch (error) {
              console.error("Error fetching promotions:", error);
          }
      },

      async fetchProducts() {
          try {
              const response = await axios.get("http://localhost:3000/api/products");
              this.products = response.data;
              console.log("Products fetched:", this.products);
          } catch (error) {
              console.error("Error fetching products:", error);
          }
      },

      async fetchGroups() {
          await axios.get("http://localhost:3000/api/groups").then(res => {
          this.groups = res.data;
        })
      }
    },
  })    