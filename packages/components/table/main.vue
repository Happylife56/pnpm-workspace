<template>
  <el-table :data="tableDataList" style="width: 100%;" class="mt20" v-bind="$attrs" :empty-text="emptyText">
    <el-table-column v-for="item in tableColumn" :key="item.prop" :label="item.label" :name="item.name" :width="item.width" :min-width="item.minWidth" show-overflow-tooltip>
      <template #default="scope">
        <slot v-if="item.custom && scope.$index >=0" :name="item.custom" :item="scope.row" :index="scope.$index" />
        <span v-else>{{ scope.row[item.prop] }}</span>
      </template>
    </el-table-column>
    <template #empty v-if="$slots.empty">
      <slot name="empty" />
    </template>
  </el-table>
  <pagination :total="total" v-model="currentPage" @change="changePage" />
</template>

<script>
import { defineComponent, computed } from 'vue';
import pagination from '../pagination';

export default defineComponent({
  name: 'KTable',
  components: { pagination },
  props: {
    emptyText: { type: String, default: '暂无数据' },
    tableColumn: {
      type: Array,
      default: () => [
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
      ],
    },
    tableData: { type: Array, default: () => [] },
    modelValue: { type: Number, default: 1 },
    total: { type: Number, default: 9 },
  },
  emits: ['update:modelValue', 'current-change', 'update:tableData'],
  setup(props, { emit }) {
    const tableDataList = computed({
      get: () => props.tableData,
      set: (value) => emit('update:tableData', value),
    });
    const currentPage = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });

    const changePage = () => {
      emit('current-change', currentPage.value);
    };

    return { currentPage, tableDataList, changePage };
  },
});

</script>

<style>

</style>
