<template>
  <div class="machine-admin">
    <k-breadcrumb :list="headerList" />
    <div class="p-lr40 p-tb20">
      <el-button type="primary" plain size="small">
        新增机器号
      </el-button>
      <el-form :model="ruleForm" ref="ruleFormRef" size="small">
        <el-form-item>
          <k-table :table-column="tableColumn" :table-data="ruleForm.tableData">
            <template #machineNo="{ item, index}">
              <el-form-item :prop="`tableData.${index}.machineNo`" :rules="ruleRules.machineNo" class="form-item-mb" v-if="item.isAdd">
                <el-input v-model.tirm="item.machineNo" />
              </el-form-item>
              <span v-else>{{ item.machineNo }}</span>
            </template>
            <template #set>
              <k-button @click="deleteHandler(item)">
                删除
              </k-button>
            </template>
          </k-table>
        </el-form-item>
        <el-form-item>
          <k-button type="primary" size="small" @click="submitForm()">
            保存
          </k-button>
          <k-button type="primary" plain size="small" @click="cancelHandler">
            取消
          </k-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { useForm, useCommon, useMessage } from '@common/core';

const headerList = [
  { path: '/storeset', title: '店铺管理' },
  { title: '机器号管理' },
];
const tableColumn = [
  { label: '机器号', prop: 'machineNo', custom: 'machineNo' },
  { label: '使用状态', prop: 'statue' },
  { label: '当班人', prop: 'uName' },
  { label: '所属门店', prop: 'shopName' },
  { label: '操作', prop: 'set', custom: 'set' },
];
const checkNo = (rule, value, callback) => {
  if (value) {
    const list = ruleForm.value.tableData.map((item) => item.machineNo);
    if (list.length !== new Set(list).size) {
      callback(new Error('机器号名称不能相同'));
    } else callback();
  } else {
    callback(new Error('机器号不能为空！'));
  }
};
const ruleRules = {
  machineNo: [{ required: true, validator: checkNo, trigger: 'change' }],
};
const { ref, loadPage } = useCommon();
const ruleForm = ref({
  tableData: [
    { machineNo: '', shopName: 1, isAdd: true },
    { machineNo: '', shopName: 12 },
  ],
  machineNo: '',
});
const { ruleFormRef, submitForm, resetForm } = useForm();

const cancelHandler = () => {
  loadPage('/');
  resetForm();
};

const { mesageBox } = useMessage();
const deleteHandler = () => {
  mesageBox.confirm({ msg: '是否删除机器号?' }).then(() => {
    console.log(666);
  });
};
</script>

<style lang="scss" scoped>
.form-item-mb {
  margin-bottom: 15px !important;
}
</style>
