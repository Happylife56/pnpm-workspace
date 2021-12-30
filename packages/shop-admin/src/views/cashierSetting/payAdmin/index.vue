<template>
  <div class="pay-admin mt10">
    <paymentList ref="payList" />
    <otherSet v-for="(item,index) in Object.keys(defaultSet)" :key="index" :params="typeLists[item]" v-model="defaultSet[item]" @change="changTest" />
    <!-- <k-button type="primary" class="mt20" @click="changTest">
      保存设置
    </k-button> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import paymentList from './paymentList.vue';
import otherSet from './otherSet.vue';

const typeLists = ref({
  bitOpenReturnChangeMoney: { title: '零钱充值', explain: '开启后，使用现金支付的找零金额将自动充入储值卡内' },
  bitOpenMultiPay: { title: '组合支付', explain: '开启后，订单结算是可以选择两种不同的支付方式组合支付。' },
});
const defaultSet = ref({
  bitOpenReturnChangeMoney: true,
  bitOpenMultiPay: false,
});

const payList = ref(null);
const changTest = (val) => {
  console.log('val: ', val);
  console.log('defaultSet.value: ', defaultSet.value);
  console.log(payList.value.paytypeList);
};
</script>

<style lang="scss" scoped>

</style>
