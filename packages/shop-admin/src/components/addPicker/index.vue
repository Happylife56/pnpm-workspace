<template>
  <k-dialog :title="title" v-model="dialogVisible" width="800px" custom-class="goods-picker" top="10vh">
    <k-picker :table-data="tableData" :table-column="tableColumn" v-model="multipleSelection">
      <template #top>
        <slot name="top">
          <el-row :gutter="10" class="mb10">
            <el-col :span="8">
              <el-input placeholder="请输入商品名称或者商品编号" v-model="search" @change="changeHandle" />
            </el-col>
            <el-col :span="6" />
          </el-row>
        </slot>
      </template>
    </k-picker>
    <template #footer>
      <div class="flex-between">
        <k-page :total="total" v-model="currentPage" @change="changeHandle" class="mt0" />
        <div class="flex1 text-right">
          <el-button @click="dialogVisible = false">
            取 消
          </el-button>
          <el-button type="primary" @click="confirmHandler" :disabled="!multipleSelection.length">
            确 定
          </el-button>
        </div>
      </div>
    </template>
  </k-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  title: { type: String, default: '添加商品' },
  total: { type: Number, default: 9 },
  modelValue: { type: Boolean, default: false },
  tableData: { type: Array, default: () => [] },
  tableColumn: {
    type: Array,
    default: () => [
      { label: '商品名称', prop: 'pName' },
      { label: '规格', prop: 'spec' },
      { label: '编号', prop: 'code' },
      { label: '单价/元', prop: 'price' },
    ],
  },
});
const emit = defineEmits(['update:modelValue', 'current-chagne', 'change', 'confirm']);
const dialogVisible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const currentPage = ref(1);
const multipleSelection = ref([]);

const confirmHandler = () => {
  emit('confirm', multipleSelection.value);
};

const search = ref('');
const changeHandle = () => {
  const list = { page: currentPage.value };
  if (search.value) list.search = search.value;
  emit('change', list);
};

</script>

<style lang="scss">
.goods-picker {
  .el-dialog__body {
    padding: 10px 20px 0;
  }

  .mt0 {
    margin-top: 0;
  }
}
</style>
