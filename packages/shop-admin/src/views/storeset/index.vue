<template>
  <div class="store-list">
    <div class="shop-add">
      <el-button type="primary" size="small">
        新增店铺
      </el-button>
    </div>
    <shopCardSet />
  </div>
</template>

<script setup>
import { useMessage } from '@common/core';
import shopCardSet from './components/shopCardSet.vue';

const { message } = useMessage();
message.error('123');

</script>

<style lang="scss" scoped>
.store-list {
  .shop-add {
    background: #f5f5f5;
    padding: 20px 50px;
  }

}
</style>
