<template>
  <div class="dicount-admin">
    <otherSet :params="{ title: '单商品改价', explain: '开启后，可对单商品金额进行处理设置' }" v-model="discountSet.discountSet" />
    <otherSet :params="{ title: '整单改价', explain: '开启后，可对订单金额进行优惠处理设置' }" v-model="discountSet.bitChangeByOrder">
      <template #content>
        <wholeChange />
      </template>
    </otherSet>
    <otherSet :params="{ title: '抹零', explain: '开启后，可对金额尾数进行处理' }" v-model="discountSet.bitWipeOffZero">
      <template #content>
        <div class="flex">
          <span class="weight-600 mr10 flex-shrink">
            抹零方式：
          </span>
          <el-radio-group v-model="discountSet.wipeOffZeroType">
            <el-radio :label="item.label" v-for="(item,index) in wipeOffZeroList" :key="index" class="mb10">
              <span>{{ item.title }}</span>
            </el-radio>
          </el-radio-group>
        </div>
      </template>
    </otherSet>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import otherSet from '../payAdmin/otherSet.vue';
import wholeChange from './wholeChange.vue';

const wipeOffZeroList = [
  { label: 2, title: '抹分（抹除金额分位数，如8.88元，则实收8.8元）' },
  { label: 3, title: '抹角（抹除金额角位数，如8.8元，则实收8.00元）' },
  { label: 1, title: '四舍五入抹“分”（抹除金额分位数，如8.88元，则实收8.9元）' },
  { label: 0, title: '四舍五入抹“角”（抹除金额角位数，如8.8元，则实收9.00元）' },
];

const discountSet = ref({
  bitChangeByCommodity: false,
  bitChangeByOrder: false,
  bitWipeOffZero: false,
  wipeOffZeroType: 0,
});

</script>

<style lang="scss" scoped>

</style>
