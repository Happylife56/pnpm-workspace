<template>
  <div>
    <k-tabs :tabs-list="tabsList" />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup>
const tabsList = [
  { label: '店员管理', name: 'staffAdmin' },
  { label: '商品标签设置', name: 'goodsLabel' },
];

</script>

<style>
</style>
