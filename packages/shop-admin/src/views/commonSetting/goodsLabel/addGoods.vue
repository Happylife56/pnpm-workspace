<template>
  <div class="add-label mt20">
    <div class="flex-align-center mb20">
      <el-button type="primary" @click="addGoodsHandle">
        添加商品
      </el-button>
      <span>
        （已关联<span>{{ totalElements || 0 }}</span>件商品)
      </span>
    </div>
    <k-batch-table :table-column="tableColumn" :table-data="tableData" :total="totalElements" v-model="multipleSelection" v-model:page="currentPage" @current-change="currentPageHandle" v-if="tableData.length">
      <template #set="{ item }">
        <el-button size="small" @click="handleDelete(item)">
          删除
        </el-button>
      </template>
      <template #footer>
        <k-button size="small" :disabled="!multipleSelection.length" @click="batchDelete">
          批量删除
        </k-button>
      </template>
    </k-batch-table>
    <!-- 没有数据的时候 -->
    <emptyData tips="" v-else />
    <!-- 添加商品 -->
    <add-picker v-model="goodsVisible" ref="addTest" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import emptyData from '@/components/emptyData.vue';
import addPicker from '@/components/addPicker/index.vue';
import { apiData } from './api';

console.log('apiData: ', apiData);

const props = defineProps({
  shopId: { type: [String, Number], default: '' },
});
const tableColumn = [
  { label: '商品名称', prop: 'pName' },
  { label: '规格', prop: 'spec' },
  { label: '商品单价', prop: 'price' },
  {
    label: '操作', prop: 'set', custom: 'set', width: 120,
  },
];
const tableData = ref([1]);
const totalElements = ref(2);
const multipleSelection = ref([]);
const currentPage = ref(1);

const addTest = ref(null);
watch(() => props.shopId, (val) => {
  setTimeout(() => {
    console.log(addTest.value);
  }, 1000);
  console.log('val: ', val);
}, { immediate: true });
onMounted(() => {
  const { data } = apiData;
  tableData.value = data.content.map((item) => ({ ...item.commodity, id: item.id }));
  totalElements.value = data.totalElements;
});

const handleDelete = (item) => {
  console.log('item: ', item);
};

const batchDelete = () => {
  console.log(multipleSelection.value);
  tableData.value = tableData.value.filter((item) => multipleSelection.value.every((mul) => mul.id !== item.id));
  multipleSelection.value = [];
};

const currentPageHandle = (page) => {
  console.log('page: ', page);
};

const goodsVisible = ref(false);
const addGoodsHandle = () => {
  goodsVisible.value = true;
};
</script>

<style lang="scss" scoped>
.label-list {
  border: solid 1px $borderdivcolor;
  border-radius: 4px;
  padding: 20px;
  padding-bottom: 0;
}
</style>
