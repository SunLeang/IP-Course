<template>
  <div class="flex flex-row gap-2 text-[#7E7E7E]">
    <div>{{ first }}</div>
    <div v-if="second != undefined">></div>
    <div>{{ second }}</div>
    <div v-if="third != undefined">></div>
    <div>{{ third }}</div>
  </div>
</template>
<script>
export default {
  props: {
    first: String,
    second: String,
    third: String,
  },
}
</script>
<style></style>
