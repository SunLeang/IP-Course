<template>
  <div class="mx-[50px] my-[20px]">
    <Searchbar />
    <Tabbar />
  </div>
</template>
<script>
import Searchbar from '@/components/SubComponents/Searchbar.vue'
import Tabbar from '@/components/SubComponents/Tabbar.vue'

export default {
  components: { Searchbar, Tabbar },
}
</script>

<style></style>
