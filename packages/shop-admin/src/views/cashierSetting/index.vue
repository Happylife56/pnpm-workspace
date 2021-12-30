<template>
  <div class="cashier-set">
    <k-tabs :tabs-list="tabsList" type="card" />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup>
const tabsList = [
  { label: '支付管理', name: 'payAdmin' },
  { label: '优惠管理', name: 'discountAdmin' },
];

</script>

<style lang="scss" scoped>
.cashier-set {
  padding: 20px;
}
</style>
