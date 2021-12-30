<template>
  <div class="header-nav flex-between">
    <tabsNav />
    <div class="flex-center flex-shrink nav-right">
      <hotKey />
      <chooseStore />
      <userAdmin />
    </div>
  </div>
</template>

<script setup>
import tabsNav from './tabsNav.vue';
import hotKey from './hotKey.vue';
import chooseStore from './chooseStore.vue';
import userAdmin from './userAdmin.vue';

</script>

<style lang="scss">
.header-nav {
  border-bottom: 1px solid #e4e7ed;
  overflow: hidden;

  .iconfont {
    font-size: 22px;
  }

}
</style>
