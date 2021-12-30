<template>
  <div class="store-list overflow-y">
    <shopCard height="170px" pointer />
  </div>
</template>

<script setup>
import shopCard from '../components/shopCard/index.vue';
</script>

<style lang="scss" scoped>
.ul-li {
  border-top: 1px solid $borderdivcolor;
  height: 100px;
}
</style>
