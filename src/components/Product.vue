<template>
  <div class="product-container">
    <div class="product-grid">
      <div
        v-for="(product, index) in products"
        :key="index"
        @click="$router.push('/products/' + index)"
        class="product-card"
      >
        <div
          class="badge"
          v-if="product.badge"
          :style="{
            backgroundColor:
              product.badge === 'Hot'
                ? '#FD6E6E'
                : product.badge === 'Sale'
                  ? '#FDC040'
                  : '#3BB77E',
          }"
        >
          {{ product.badge }}
        </div>
        <div style="height: 30px" v-else></div>
        <div style="height: 200px">
          <img :src="product.image" alt="img" class="product-image" />
        </div>
        <p class="product-brand">{{ product.brand }}</p>
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-rating">
          <i class="fa-solid fa-star" style="color: #ffdf00"></i>
          <i class="fa-solid fa-star" style="color: #ffdf00"></i>
          <i class="fa-solid fa-star" style="color: #ffdf00"></i>
          <i class="fa-solid fa-star" style="color: #ffdf00"></i>
          <i class="fas fa-star" style="color: #cbd5e1"></i>
          (4.0)
        </p>
        <p class="product-weight">{{ product.weight }} gram</p>
        <div class="product-pricing">
          <span class="current-price">${{ product.price }}</span>
          <span v-if="product.oldPrice" class="old-price"
            >${{ product.oldPrice }}</span
          >
          <button class="add-to-cart">Add +</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
          brand: 'Hodo Foods',
          weight: '500 gram',
          rating: 4.0,
          price: '2.51',
          oldPrice: '2.80',
          badge: '-17%',
          image: './src/assets/images/mango.jpg',
        },
        {
          name: 'All Natural Italian-Style Chicken Meatballs',
          brand: 'Hodo Foods',
          weight: 500,
          rating: 4.0,
          price: 2.51,
          oldPrice: 2.8,
          badge: 'Hot',
          image: './src/assets/images/corn.png',
        },
        {
          name: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn',
          brand: 'Hodo Foods',
          weight: 500,
          rating: 4.0,
          price: 2.51,
          oldPrice: 2.8,
          badge: 'Sale',
          image: './src/assets/images/oranges.png',
        },
        {
          name: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
          brand: 'Hodo Foods',
          weight: 500,
          rating: 4.0,
          price: 2.51,
          oldPrice: 2.8,
          badge: '',
          image: './src/assets/images/peper.png',
        },
        {
          name: 'Blue Diamond Almonds Lightly Salted Vegetables',
          brand: 'Hodo Foods',
          weight: 500,
          rating: 4.0,
          price: 2.51,
          oldPrice: 2.8,
          badge: '',
          image: './src/assets/images/lemon.png',
        },
        {
          name: 'Chobani Complete Vanilla Greek Yogurt',
          brand: 'Hodo Foods',
          weight: 500,
          rating: 4.0,
          price: 2.51,
          oldPrice: 2.8,
          badge: '',
          image: './src/assets/images/meat.png',
        },
        {
          name: 'Canada Dry Ginger Ale - 2 L Bottle - 200ml - 400g',
          brand: 'Hodo Foods',
          weight: 500,
          rating: 4.0,
          price: 2.51,
          oldPrice: 2.8,
          badge: 'Sale',
          image: './src/assets/images/ginger.png',
        },
        {
          name: 'Encore Seafood Stuffed Alaskan Salmon',
          brand: 'Hodo Foods',
          weight: 500,
          rating: 4.0,
          price: 2.51,
          oldPrice: 2.8,
          badge: '',
          image: './src/assets/images/salmon.png',
        },
        {
          name: 'Gorton’s Beer Battered Fish Fillets with soft paper',
          brand: 'Hodo Foods',
          weight: 500,
          rating: 4.0,
          price: 2.51,
          oldPrice: 2.8,
          badge: '',
          image: './src/assets/images/fish.png',
        },
        {
          name: 'Haagen-Dazs Caramel Cone Ice Cream Ketchup',
          brand: 'Hodo Foods',
          weight: 500,
          rating: 4.0,
          price: 2.51,
          oldPrice: 2.8,
          badge: 'Hot',
          image: './src/assets/images/beetroot.png',
        },
      ],
    }
  },
}
</script>

<style scoped>
.product-container {
  padding: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 245px);
  gap: 15px;
}

.product-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.badge {
  background: #3bb77e;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom: 10px;
  display: inline-block;
}

.product-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.product-name {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

.product-brand {
  color: #666;
  font-size: 12px;
  margin-bottom: 5px;
}

.product-weight {
  font-size: 12px;
  color: #888;
  margin-bottom: 10px;
}

.product-rating {
  font-size: 12px;
  color: gray;
  margin-bottom: 10px;
}

.product-pricing {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 0px;
}

.current-price {
  font-size: 16px;
  color: #3bb77e;
  font-weight: bold;
}

.old-price {
  font-size: 10px;
  text-decoration: line-through;
  color: #888;
}

.add-to-cart {
  background: #def9ec;
  color: #3bb77e;
  border: none;
  border-radius: 4px;
  padding: 8px 10px;
  margin-left: 80px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart:hover {
  background: #3bb77e;
  color: #def9ec;
}
</style>
