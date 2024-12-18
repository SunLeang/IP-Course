<template>
    <div class="mx-[50px]">
      <Navigatebar
        first="Home"
        second="Vegetables & tubers"
        third="Seeds of Change Organic"
      />
      <div class="flex gap-10">
        <div
          class="flex border-solid border-2 border-gray rounded-md h-[500px] w-[50vw] p-10"
        >
          <img
            :src="products[currentIndex].imgUrl"
            :alt="products[currentIndex].alt"
            class="object-contain w-full h-full"
          />
        </div>
  
        <div class="flex flex-col gap-5">
          <div class="text-[35px] font-semibold">
            {{ products[currentIndex].title }}
          </div>
          <div class="product-rating flex">
            <div
              v-for="(product, index) in products[currentIndex].rating"
              :key="index"
            >
              <i class="fa-solid fa-star" style="color: #ffdf00"></i>
            </div>
            <div
              v-for="(product, index) in 5 - products[currentIndex].rating"
              :key="index"
            >
              <i class="fas fa-star" style="color: #cbd5e1"></i>
            </div>
            ({{ products[currentIndex].rating }}.0)
          </div>
          <div class="flex gap-10 text-center items-end">
            <div class="text-green text-5xl font-semibold">
              {{ products[currentIndex].price }}$
            </div>
            <div class="text-gray text-2xl font-semibold line-through">
              {{ (1 - 0.1) * products[currentIndex].price }}$
            </div>
          </div>
  
          <div class="w-[500px] text-[#334155]">
            {{ products[currentIndex].desc }}
          </div>
  
          <div class="flex">
            <form action="" class="w-[188px]">
              <input
                type="number"
                name="input"
                id="input"
                class="border-2 border-green rounded-md p-2 text-green"
              />
            </form>
            <button class="text-white bg-green h-10 w-[150px] mx-10">
              <i class="fa-solid fa-cart-shopping"></i>
              Add To Cart
            </button>
            <button class="border-solid border-black py-2 px-4 mx-2">
              <i class="fa-regular fa-heart"></i>
            </button>
            <button class="border-solid border-black py-2 px-4">
              <i class="fa-solid fa-shuffle"></i>
            </button>
          </div>
        </div>
      </div>
  
      <div class="h-fit w-fit flex my-5 gap-5">
        <button
          class="bg-gray w-10 h-8 self-center text-white"
          @click="previousImage"
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>
  
        <img
          v-for="(img, index) in products"
          :key="index"
          :src="img.imgUrl"
          :alt="img.alt"
          :class="[
            'border-solid border-2 rounded-lg p-2 h-24 w-28 cursor-pointer',
            index === currentIndex ? 'border-green' : 'border-gray',
          ]"
          @click="selectImage(index)"
        />
  
        <button
          class="bg-gray w-10 h-8 self-center text-white"
          @click="nextImage"
        >
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </template>
  <script>
  import Navigatebar from '@/components/SubComponents/Navigatebar.vue'
  import orangeImg from '@/assets/images/oranges1.png'
  import dryerImg from '@/assets/images/dryersheet.png'
  import strawberryImg from '@/assets/images/strawberry.png'
  import lemonImg from '@/assets/images/lemon.png'
  
  export default {
    components: { Navigatebar },
    data() {
      return {
        currentIndex: 0,
        products: [
          {
            imgUrl: orangeImg,
            alt: 'orange',
            title: 'A Couple of Oranges',
            rating: 4.0,
            price: 38,
            discount: 10,
            desc: "The citrus superhero you didn't know you needed—saving you from scurvy and boring breakfasts, one slice at a time.",
          },
          {
            imgUrl: dryerImg,
            alt: 'box',
            title: 'A Box of Dryersheet',
            rating: 5.0,
            price: 45,
            discount: 10,
            desc: 'Keep your laundry fresh and soft with these premium dryer sheets that reduce static and leave a gentle scent.',
          },
          {
            imgUrl: strawberryImg,
            alt: 'strawberry',
            title: 'Juicy Strawberries',
            rating: 3.0,
            price: 59,
            discount: 10,
            desc: 'Sweet and tangy fresh strawberries, perfect for snacking, desserts, or adding a burst of flavor to your dishes.',
          },
          {
            imgUrl: lemonImg,
            alt: 'lemon',
            title: 'Lemon? That looks like oranges',
            rating: 4.0,
            price: 34,
            discount: 10,
            desc: 'Bright citrus fruits, whether lemons or oranges, ready to add zest, juice, and vibrant flavor to your meals and drinks.',
          },
        ],
      }
    },
    computed: {
      currentImage() {
        return this.products[this.currentIndex]
      },
    },
    methods: {
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.products.length
      },
      previousImage() {
        this.currentIndex =
          (this.currentIndex - 1 + this.products.length) % this.products.length
      },
      selectImage(index) {
        this.currentIndex = index
      },
    },
  }
  </script>
  
  <style></style>
  