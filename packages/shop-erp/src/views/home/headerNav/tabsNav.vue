<template>
  <div class="tabs-pane overflow">
    <el-tabs v-model="activeKey" type="card" @edit="onEdit" @tab-click="tabClick">
      <el-tab-pane v-for="(pane,index) in headerTabsList" :key="pane.name" :label="pane.title" :name="pane.name" :closable="index > 1" />
    </el-tabs>
  </div>
</template>

<script setup>
import { useCommon } from '@common/core';
import { useNav } from '../mixins/useNav';

const { getState, store } = useCommon();

const { activeKey, setBackNav } = useNav();

const headerTabsList = getState('home', 'headerTabsList');

// 删除
const onEdit = (targetKey) => {
  setBackNav({ key: targetKey, isDel: true });
  store.commit('home/setHeaderTabsList', { name: targetKey, isDel: true });
};
const tabClick = (tab) => setBackNav({ key: tab.paneName });
</script>

<style lang="scss">
.tabs-pane {
  flex: 1;

  .el-tabs__header {
    border-color: transparent !important;
    margin: 0;
  }

  .el-tabs {
    .el-tabs__item,
    .el-tabs__nav {
      border: none !important;
    }

    .el-tabs__item.is-active {
      background-color: var(--el-color-primary-light-9);
      border-bottom: 2px solid #f4364c !important;
    }
  }
}
</style>
