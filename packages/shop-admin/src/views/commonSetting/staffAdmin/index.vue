<template>
  <div class="p20-d40">
    <explainHandle />
    <div class="flex mt20">
      <el-button type="primary" size="small" @click="staffVisible = true">
        新增店员
      </el-button>
      <div class="width-240 ml20">
        <searchInput placeholder="请输入员工姓名或者手机号" v-model="search" @change="seachHandle" />
      </div>
    </div>
    <k-table :table-column="tableColumn" :table-data="tableData">
      <template #set="{ item }">
        <k-button type="primary" plain size="small" @click="handleAuthorize(item)">
          关联授权
        </k-button>
        <k-button size="small" @click="handleDelete(item)">
          删除
        </k-button>
      </template>
    </k-table>
    <addStaff v-model="staffVisible" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import explainHandle from '@/components/explainHandle.vue';
import searchInput from '@/components/searchInput.vue';
import addStaff from './addStaff.vue';

const search = ref('');
const seachHandle = (val) => {
  console.log('val: ', val);
};

const tableColumn = [
  { label: '姓名', prop: 'name' },
  { label: '工号', prop: 'staffId' },
  { label: '联系电话', prop: 'phone' },
  { label: '关联授权', prop: 'author' },
  {
    label: '操作', prop: 'set', custom: 'set', width: 180,
  },
];

const tableData = ref([
  { name: 1 },
]);

const staffVisible = ref(false);

const handleAuthorize = (item) => {
  console.log('授权: ', item);
};
const handleDelete = (item) => {
  console.log('删除: ', item);
};
</script>

<style lang="scss" scoped>

</style>
