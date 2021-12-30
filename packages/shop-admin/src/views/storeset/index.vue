<template>
  <div class="store-list">
    <div class="shop-add">
      <el-button type="primary" size="small" @click="loadAddStore">
        新增店铺
      </el-button>
    </div>
    <emptyData v-if="bitHasData">
      <span class="c-gray9">
        您还没有创建自己的店铺，
        <span class="c-blue pointer" @click="loadAddStore">
          点击创建
        </span>一个吧！
      </span>
    </emptyData>
    <shopCardSet v-else />
  </div>
</template>

<script setup>
import { useCommon } from '@common/core';
import shopCardSet from './components/shopCard/shopCardSet.vue';

import emptyData from './components/emptyData/index.vue';

const { ref, loadPage } = useCommon();

const bitHasData = ref(false);
const loadAddStore = () => {
  loadPage('/storeset/addstore');
};
</script>

<style lang="scss" scoped>
.store-list {
  .shop-add {
    background: #f5f5f5;
    padding: 20px 50px;
  }

}
</style>
