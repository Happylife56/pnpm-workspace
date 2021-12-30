<template>
  <div class="k-picker">
    <slot name="top" />
    <el-row :gutter="10">
      <el-col :span="15">
        <div class="col-left">
          <batchTable ref="batchTableRef" :table-data="tableData" :table-column="tableColumn" v-model="multipleSelection" />
        </div>
      </el-col>
      <el-col :span="9">
        <div class="col-right">
          <div class="selete-header flex-between">
            <span>已选择<span>({{ multipleSelection.length }})</span>
            </span>
            <el-button type="text" icon="el-icon-delete" @click="emptyHandler" />
          </div>
          <div class="selete-content">
            <div class="flex-between pl10 pr10" v-for="item in multipleSelection" :key="item.id">
              <div class="text-overflow mr20">
                <el-tooltip effect="dark" :content="item.pName" placement="top">
                  <span>{{ item.pName }}</span>
                </el-tooltip>
              </div>
              <el-button type="text" @click="deleteHandler(item)">
                删除
              </el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  ref, watch, computed, defineComponent,
} from 'vue';
import batchTable from '../batch-table/main.vue';

export default defineComponent({
  name: 'KPicker',
  components: { batchTable },
  emits: ['update:modelValue'],
  props: {
    modelValue: { type: Array, default: () => [] },
    select: { type: Array, default: () => [] },
    tableData: { type: Array, default: () => [] },
    tableColumn: { type: Array, default: () => [] },
  },
  setup(props, { emit }) {
    const multipleSelection = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });
    const batchTableRef = ref(null);
    // clear all
    const emptyHandler = () => batchTableRef.value.toggleSelection();
    // delete tag
    const deleteHandler = (row) => batchTableRef.value.handleRowClick(row);

    // set disabled goods
    const setSelectable = () => {
      setTimeout(() => {
        props.tableData.forEach((item) => {
          item.select = false;
        });
        props.select.forEach((item) => {
          const itemId = item.id;
          props.tableData.forEach((type) => {
            if (itemId === type.id) type.select = true;
          });
        });
        batchTableRef.value.toggleSelection(multipleSelection.value);
      }, 500);
    };

    watch(() => props.tableData, () => {
      setSelectable();
    }, { immediate: true });

    return {
      multipleSelection, batchTableRef, emptyHandler, deleteHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.k-picker {
  .col-right {
    border: 1px solid #d8dce5;
    border-radius: 6px;

    .selete-header {
      background: #f5f5f5;
      height: 46.38px;
      padding: 0 10px;
    }

    .selete-content {
      height: 482px;
      overflow-y: auto;
    }
  }
}

</style>
