<template>
  <div>
    <button :style="{ backgroundColor: buttonColor }" class="text-white p-2">
      Shop Now &#x2192;
    </button>
  </div>
</template>

<script>
export default {
  props: ['buttonColor'],
}
</script>

<style>
button {
  /* background-color: #3BB77E; */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 15px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
}

button:hover {
  background-color: #32a46b;
}
</style>
