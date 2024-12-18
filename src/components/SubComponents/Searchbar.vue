<template>
  <div class="flex justify-between items-center self-center py-4">
    <RouterLink to="/" class="flex">
      <img src="@/assets/images/logo.png" alt="logo" />
      <div class="mx-1">
        <div class="text-green-500 text-4xl font-semibold">Melon</div>
        <div class="text-xs font-semibold text-gray-600">MART & GROCERY</div>
      </div>
    </RouterLink>

    <div
      class="flex text-center self-center justify-start border-2 border-[#BCE3C9] rounded-sm w-[30%] h-8 text-sm"
    >
      <button class="flex-none px-2">All Categories</button>
      <div class="flex-none mx-2 text-[#b1e4c2]">|</div>
      <input
        type="search"
        name="searchbar"
        id="searchbar"
        placeholder="Search for items"
        class="placeholder:text-black placeholder:px-2 grow"
      />
      <i
        class="fa-solid fa-magnifying-glass m-2 text-center placeholder:italic"
        style="color: #6b7280"
      ></i>
    </div>

    <div class="flex gap-5">
      <div>
        <i class="fa-regular fa-user"></i>
        Account
      </div>
      <div>
        <i class="fa-solid fa-arrows-rotate"></i>
        Compare
      </div>
      <div>
        <i class="fa-regular fa-heart"></i>
        Wishlist
      </div>
      <div>
        <i class="fa-solid fa-cart-shopping"></i>
        Cart
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
