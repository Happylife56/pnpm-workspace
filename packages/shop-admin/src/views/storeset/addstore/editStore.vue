<template>
  <div class="p-tb20">
    <el-form ref="ruleFormRef" :model="ruleForm" label-width="180px">
      <el-form-item label="店铺名称：" props="name">
        <span>{{ ruleForm.name }}</span>
      </el-form-item>
      <el-form-item label="店铺地址：" prop="address">
        <span>{{ ruleForm.address }}</span>
      </el-form-item>
      <el-form-item label="营业时间：" prop="address">
        <span>01：00-12。00</span>
      </el-form-item>
      <el-form-item label="店铺logo：">
        <uploadEdit v-model="ruleForm.imgLoge" />
      </el-form-item>
      <el-form-item :label="item.label" v-for="item in setList" :key="item.key">
        <el-switch v-model="item.value" />
        <span class="ml20 color-99">{{ item.explain }}</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">
          保存
        </el-button>
        <el-button @click="revertHandler">
          返回
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useForm, useCommon } from '@common/core';
import uploadEdit from './uploadEdit.vue';

const ruleForm = ref({
  name: '',
  address: '',
  imgLoge: '',
  modeType: false,
});
const setList = ref([
  {
    label: '商品展示(单图模式)：', explain: '默认多图模式，开启后，商品展示方式为单图模式', value: false, key: 'modeType',
  },
  {
    label: '导购员：', explain: '导购员开启后，订单结算时必须选择导购员', value: false, key: 'isGuide',
  },
  {
    label: '统一导购员设置：', explain: '导购员开启后，选择导购员默认为统一设置', value: false, key: 'isUnified',
  },
  {
    label: '员工业绩提成：', explain: '开启后，员工可根据业提成方案参与提成', value: false, key: 'isCommission',
  },
  {
    label: '修改支付方式：', explain: '开启后，已结算订单可修改支付方式', value: false, key: 'isCommission',
  },
  {
    label: '展示无期库存商品：', explain: '默认无期初库存不展示，开启后，收银台可展示无期初库存商品', value: false, key: 'isCommission',
  },
]);
const { submitForm, resetForm, ruleFormRef } = useForm();
const { loadPage } = useCommon();

const revertHandler = () => {
  loadPage('storeList');
  resetForm();
};
</script>

<style lang="scss" scoped>

</style>
