<template>
  <div class="add-store flex-column">
    <div class="store-header flex-between">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/storeset' }">
          店铺设置
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          新增店铺
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="p-tb20 flex1 overflow-y">
      <el-steps :active="active" process-status="success" class="p-lr40">
        <el-step title="选择门店" />
        <el-step title="编辑门店信息" />
        <el-step title="完成设置" />
      </el-steps>
      <router-view class="flex-column flex1" />
      <div class="p-lr40" v-if="active === 0">
        <el-button type="primary" @click="clickNext">
          下一步
        </el-button>
        <el-button @click="revertHandler">
          返回
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCommon } from '@common/core';

const {
  ref, loadPage, watch, routerName,
} = useCommon();
const active = ref(0);

watch(() => routerName.value, (name) => {
  const list = { storeList: 0, editStore: 1, success: 2 };
  active.value = list[name];
}, { immediate: true });
const clickNext = () => {
  if (active.value < 2) active.value++;
  if (active.value === 1) loadPage('/storeset/addstore/editStore');
};
const revertHandler = () => {
  active.value = 0;
  loadPage('/storeset');
};
</script>

<style lang="scss" scoped>
.add-store {
  .store-header {
    border-bottom: 1px solid $borderdivcolor;
    height: 50px;
    padding: 0 20px;
  }
}

</style>

<style lang="scss">
.is-link {
  color: $maincolor !important;
}
</style>
