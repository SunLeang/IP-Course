import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: [],
  }),
  getters: {
    getCategoriesByGroup: (state) => {
      // console.log("productjs categories:", state.categories.find((category) => category.group === "Fruits"));
      return (groupName) =>
        state.categories.find((category) => category.group === groupName)
    },

    getProductsByGroup: (state) => {
      return (groupName) =>
        state.products.find((product) => product.group === groupName)
    },
    getProductsByCategory: (state) => {
      return (categoryId) =>
        state.products.find((product) => product.categoryId === categoryId)
    },
    getPopularProducts: (state) => {
      // console.log("State: ", state.products.filter((product) => product.countSold > 10));
      return state.products.filter((product) => product.countSold > 10)
    },
  },
  actions: {
    async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/api/categories')
        this.categories = response.data
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    },
    async fetchPromotions() {
      try {
        const response = await axios.get('http://localhost:3000/api/promotions')
        this.promotions = response.data
      } catch (error) {
        console.error('Error fetching promotions:', error)
      }
    },
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/api/products')
        this.products = response.data
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    async fetchGroups() {
      try {
        const response = await axios.get('http://localhost:3000/api/groups')
        this.groups = response.data
      } catch (error) {
        console.error('Error fetching groups:', error)
      }
    },
  },
})
