<template>
  <div class="aside-munu">
    <el-menu class="aside-munu" :default-active="activeKey" active-text-color="#f4364c" @select="handleSelect">
      <el-menu-item v-for="item in menuList" :key="item.name" :index="item.name">
        <i class="iconfont mr10" :class="item.iconfont" :style="{color:item.iconColor}" />
        <span>{{ item.title }}</span>
      </el-menu-item>
      <el-sub-menu index="more">
        <template #title>
          <i class="iconfont icon-daohang mr10" style="color: #f65e70;" />
          <span>更多</span>
        </template>
        <el-menu-item v-for="(group, index) in moreList" :key="index" :index="group.name" class="more-item flex-center">
          {{ group.title }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
    <ul>
      <li class="el-menu-item set-menu-item" :class="{'goods-item':!index}" v-for="(item,index) in urlNavList" :key="item.name">
        <a :href="backAdminUrl" target="_blank">
          <i class="iconfont mr10" :class="item.iconfont" :style="{color:item.iconColor}" />
          <span>{{ item.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCommon } from '@common/core';
import { useNav } from './mixins/useNav';

const { ref, store, getState } = useCommon();

const menuList = [
  {
    name: 'collect', iconColor: '#4372F8', iconfont: 'icon-qiantai', title: '前台',
  },
  {
    name: 'order', iconColor: '#FFB940', iconfont: 'icon-dingdan', title: '订单',
  },
  {
    name: 'financial', iconColor: '#68D75E', iconfont: 'icon-caiwuguanli1', title: '财务',
  },
];
const moreList = [
  {
    iconfont: 'icon-inbox', title: '钱箱管理', name: 'cashAdmin', type: 'yd_pc_cashbox_001',
  },
  { iconfont: 'icon-icon--', title: '标签打印', name: 'labelPrinting' },
  { iconfont: 'icon-jiahuixiaochengxuicon_zhangdan', title: '挂账管理', name: 'creditAdmin' },
  {
    iconfont: 'icon-kuadiantuihuan', title: '跨店退换', name: 'crossStore', type: 'yd_pc_across_stores',
  },
];
// 商品以及后台
const urlNavList = [
  { iconColor: '#1ec0ff', iconfont: 'icon-dingdan1', title: '商品管理' },
  { iconColor: '#68D75E', iconfont: 'icon-shezhi1', title: '设置' },
];
const backAdminUrl = ref('#');

const { activeKey, setBackNav } = useNav();

const headerTabsList = getState('home', 'headerTabsList');
const handleSelect = (key) => {
  const tabsList = [...menuList, ...moreList];
  const isHas = headerTabsList.value.some((item) => item.name === key);
  setBackNav({ key });
  if (isHas) return;
  const [{ name, title }] = tabsList.filter((item) => item.name === key);
  store.commit('home/setHeaderTabsList', { name, title });
};
</script>

<style lang="scss" scoped>
.aside-munu {
  height: 100%;
  overflow: hidden;

  .el-menu-item {
    width: 125px;
  }

  .more-item {
    min-width: 125px;
    padding: 0 20px !important;
  }

  .iconfont {
    font-size: 22px;
  }

  .set-menu-item {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;

    &:hover {
      background-color: var(--el-color-primary-light-9);
    }
  }

  .goods-item {
    bottom: 56px;

  }

  .is-active {
    background: #f4364c8f !important;
    color: #fff !important;

    .iconfont {
      color: #fff !important;
    }
  }
}
</style>
