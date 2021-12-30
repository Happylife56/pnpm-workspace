<template>
  <div class="home flex">
    <el-menu :default-active="activeIndex" class="el-menu-demo flex-shrink" mode="vertical" @select="handleSelect" v-if="showMenu">
      <el-menu-item :index="item.path" v-for="item in menuList" :key="item.path" class="menu-item">
        {{ item.name }}
      </el-menu-item>
    </el-menu>
    <el-container>
      <router-view class="flex1 overflow-x" />
    </el-container>
  </div>
</template>

<script setup>
import { useCommon } from '@common/core';

const {
  route, loadPage, ref, computed,
} = useCommon();

const activeIndex = ref(route.name);
const handleSelect = (key) => {
  activeIndex.value = key;
  loadPage(key);
};

const menuList = ref([
  { name: '店铺设置', path: 'storeset' },
  { name: '通用设置', path: 'commonSetting' },
  { name: '收银设置', path: 'cashierset' },
  // { name: '营销活动', path: 'marketing' },
  // { name: '增值应用', path: 'appreciation' },
  // { name: '小程序设置', path: 'wechatSetting' },
  // { name: 'ERP入口', path: 'wechatSetting' },
]);

const showMenu = computed(() => import.meta.env.MODE === 'development');

</script>

<style lang="scss" scoped>
.el-menu-demo {
  height: 100%;
  width: 120px;

  .el-menu-item {
    text-align: center;
  }
}

.overflow-x {
  overflow-x: hidden;
}
</style>
