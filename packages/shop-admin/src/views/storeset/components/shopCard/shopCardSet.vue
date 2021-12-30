<template>
  <!-- :list-data="listData" -->
  <shop-card>
    <template #card-set="{store,index}">
      <div class="card-set">
        <k-button type="primary" plain size="small" :icon-lock="getEditor()" @click="openMachine(store.id)">
          机器号管理
        </k-button>
        <k-button type="primary" plain size="small" :icon-lock="getEditor('store')" @click="editStore(store)">
          编辑
        </k-button>
        <k-button size="small" :icon-lock="getEditor('store')" @click="deteleStore(store.id, index)">
          删除
        </k-button>
      </div>
    </template>
  </shop-card>
  <!-- 删除商品弹框 -->
  <deleteStore v-model="isShowDialog" :shop-id="shopId" :delete-phone="deletePhone" />
</template>

<script setup>
import { useCommon } from '@common/core';
import shopCard from './index.vue';
import deleteStore from './deleteStore.vue';

const { ref, loadPage } = useCommon();
defineProps({
  listData: {
    type: Array,
    default: () => [],
  },
});
const isShowDialog = ref(false);
const getEditor = (type) => {
  if (type) return false;
  return false;
};

const openMachine = () => {
  loadPage('machineAdmin');
};
const editStore = (store) => {
  console.log('store: ', store);
  loadPage('/storeset/addstore/editStore', { query: { id: store.id } });
};

const shopId = ref(0);
const deletePhone = ref('');
const deteleStore = (id, index) => {
  console.log('id,index: ', id, index);
  isShowDialog.value = true;
};

</script>

<style lang="scss" scoped>
.card-set {
  @include flex-type(flex-end, center);
  border-top: 1px solid $borderdivcolor;
  flex: 1;
  margin-top: 10px;
  padding-top: 15px;
}
</style>
