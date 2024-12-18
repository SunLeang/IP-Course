<template>
  <div
    class="hero h-[440px] bg-[#FDC04033] rounded-2xl px-12 leading-[75px] flex overflow-hidden items-center"
  >
    <div class="w-fit">
      <div class="text-[50px] font-semibold text-[#253D4E] w-[500px]">
        Don't miss amazing grocery deals
      </div>
      <div class="text-[25px] text-[#7E7E7E] mt-5 mb-10">
        Sign up for the daily newsletter
      </div>

      <div class="flex items-center">
        <input
          type="text"
          placeholder="&#xf1d8;   Your email address"
          style="font-family: Arial, 'Font Awesome 5 Free'"
          class="w-[300px] h-[50px] px-5 py-1 rounded-3xl text-sm"
        />

        <button
          class="h-[50px] bg-[#3BB77E] text-white text-sm py-[8px] px-4 rounded-3xl relative right-10"
        >
          Subscribe
        </button>
      </div>
    </div>

    <img
      src="@/assets/images/apple-bag.png"
      alt="img"
      class="w-[700px] h-auto"
    />
  </div>
</template>
<script>
export default {}
</script>
<style>
.hero {
  background-image: url('@/assets/images/cool-background.png');
}
</style>
