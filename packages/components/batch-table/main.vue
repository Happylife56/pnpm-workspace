<template>
  <el-table ref="multipleTable" empty-text="暂无数据" :data="tableData" height="100%" @select="handleSelect" @select-all="selectAll" @row-click="handleRowClick">
    <el-table-column type="selection" width="55" :selectable="checkSelection" />
    <el-table-column v-for="item in tableColumn" :label="item.label" :key="item.prop" :width="item.width" :min-width="item.minWidth" show-overflow-tooltip>
      <template #default="scope">
        <slot v-if="item.custom" :name="item.custom" :item="scope.row" :index="scope.$index" />
        <span v-else>{{ scope.row[item.prop] }}</span>
      </template>
    </el-table-column>
  </el-table>
  <div class="mt20">
    <slot name="footer" />
  </div>
  <pagination :total="total" v-model="currentPage" @change="changePage" />
</template>

<script>
import {
  ref, computed, watch, defineComponent, nextTick,
} from 'vue';
import pagination from '../pagination';

export default defineComponent({
  name: 'KBatchTable',
  components: { pagination },
  props: {
    modelValue: { type: Array, default: () => [] },
    total: { type: Number, default: 9 },
    page: { type: Number, default: 1 },
    tableData: { type: Array, default: () => [] },
    tableColumn: {
      type: Array,
      default: () => [
        { label: '商品名称', prop: 'name' },
        { label: '等级', prop: 'level' },
        { label: '价格', prop: 'price' },
      ],
    },
  },
  emits: ['update:modelValue', 'update:page', 'current-change'],
  setup(props, { emit }) {
    watch(() => props.tableData, (val) => {
      val.length && toggleSelection(multipleSelection.value);
    });

    const multipleTable = ref(null);
    const toggleSelection = (rows) => {
      if (rows) {
        props.tableData.forEach((item) => {
          rows.forEach((row) => {
            if (item.id === row.id) {
              multipleTable.value.toggleRowSelection(item);
            }
          });
        });
      } else {
        multipleSelection.value = [];
        multipleTable.value.clearSelection();
      }
    };
    const multipleSelection = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });
    const handleSelect = (selection, row) => {
      const bitHas = selection.some((item) => item.id === row.id);
      if (bitHas) {
        multipleSelection.value = [...multipleSelection.value, row];
      } else {
        multipleSelection.value = multipleSelection.value.filter((item) => item.id !== row.id);
      }
    };
    const selectAll = (selection) => {
      if (selection.length) {
        const list = selection.filter((select) => multipleSelection.value.every((item) => item.id !== select.id));
        multipleSelection.value = [...multipleSelection.value, ...list];
      } else {
        multipleSelection.value = multipleSelection.value.filter((item) => multipleSelection.value.every((row) => item.id === row.id));
      }
    };

    const handleRowClick = (row) => {
      const bitHas = multipleSelection.value.some((item) => item.id === row.id);
      toggleSelection([row]);
      if (bitHas) {
        multipleSelection.value = multipleSelection.value.filter((item) => item.id !== row.id);
      } else {
        multipleSelection.value = [...multipleSelection.value, row];
      }
    };

    const checkSelection = (row) => !row.select;

    const currentPage = computed({
      get: () => props.page,
      set: (value) => emit('update:page', value),
    });
    const changePage = () => {
      nextTick(() => {
        emit('current-change', currentPage.value);
      });
    };

    return {
      multipleTable, handleSelect, selectAll, handleRowClick, checkSelection, toggleSelection, currentPage, changePage,
    };
  },
});

</script>
