<template>
  <div class="home flex">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" @select="handleSelect">
      <el-menu-item :index="item.path" v-for="item in menuList" :key="item.path" class="menu-item">
        {{ item.name }}
      </el-menu-item>
    </el-menu>
    <router-view class="flex1" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCommon } from '@common/core';

const { route, loadPage } = useCommon();

const activeIndex = ref(route.name);
const handleSelect = (key) => {
  activeIndex.value = key;
  loadPage(key);
};

const menuList = ref([
  { name: '店铺设置', path: 'storeset' },
  { name: '通用设置', path: 'commonSetting' },
  { name: '收银设置', path: 'cashierset' },
  { name: '营销活动', path: 'marketing' },
  { name: '增值应用', path: 'appreciation' },
  { name: '小程序设置', path: 'wechatSetting' },
  { name: 'ERP入口', path: 'wechatSetting' },
]);

</script>

<style lang="scss" scoped>
.el-menu-demo {
  height: 100%;
  width: 120px;

  .el-menu-item {
    text-align: center;
  }
}
</style>
