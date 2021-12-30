<template>
  <div class="set-paytype">
    <addCustomPay>
      <template #list>
        <div class="paytype-list type-list">
          <div v-for="type in paytypeList" :key="type.paymentIndex" :label="type.paymentIndex" class="paytype-list-box">
            <div class="paytype-list-content">
              <div class="paytype-name">
                <div class="icon-span">
                  <i class="iconfont" :class="type.class" />
                </div>
                <span class="ml10 weight-600">
                  {{ type.paymentName }}
                </span>
              </div>
              <el-switch v-model="type.openStatus" :disabled="type.disabled" />
            </div>
          </div>
        </div>
      </template>
    </addCustomPay>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Sortable from 'sortablejs';
import addCustomPay from './addCustomPay.vue';

const paytypeList = ref([{
  id: '2c91a5217521c1c5017521dac22a0001', paymentName: '现金支付', paymentIndex: 0, openStatus: 1,
}, {
  id: '2c91a5217521c1c5017521dac22a0002', paymentName: '会员卡', paymentIndex: 5, openStatus: 1,
}, {
  id: '2c91a5217521c1c5017521dac22a0006', paymentName: '银行卡', paymentIndex: 1, openStatus: 1,
}, {
  id: 'b31c25473e31006962d70774f48e7f02', paymentName: '购物卡支付', paymentIndex: 14, openStatus: 1,
}, {
  id: '8a74850873d6176e0173d638be570017', paymentName: '个人微信', paymentIndex: 9, openStatus: 1,
}, {
  id: '8a74850873d6176e0173d638be570018', paymentName: '个人支付宝', paymentIndex: 8, openStatus: 1,
}, {
  id: '8a7490217602b90e017603243d080000', paymentName: '挂账', paymentIndex: 19, openStatus: 1,
}, {
  id: '2c91a5217521c1c5017521dac20d0000', paymentName: '扫码支付', paymentIndex: 10, openStatus: 1,
}, {
  id: '07d47936244293a878c7c6fa18b24c4b', paymentName: '货款余额', paymentIndex: 20, openStatus: 1,
}, {
  id: '4955c2860c20ea2fcd65bdce5c58d030', paymentName: 'SmartBox收款码', paymentIndex: 21, openStatus: 1,
}, {
  id: 'fe0167896512f53640f3f3f257d9b67a', paymentName: '饭卡支付', paymentIndex: 22, openStatus: 1,
}, {
  id: '55065f9d2ff34037ddffafc5f746a23e', paymentName: '社保卡', paymentIndex: 15, openStatus: 1, customPayId: 3038,
}]);
/**
  * 0:现金，1：银行卡，2：POS机，3：微信，4：支付宝，5：会员卡支付，6：赠送，7：多种支付，8：个人支付宝，9：个人微信，10：多粉支付，11：未知支付，12：翼支付，13：小程序，14：购物卡支付，20：货款余额 21: 魔盒支付
*/
const list = {
  10: 'icon-qrcode1', 0: 'icon-zhifu-01', 5: 'icon-vip', 20: 'icon-huokuanyue', 21: 'icon-hezixiangzi', 9: 'icon-weixin2', 8: 'icon-zhifubao', 1: 'icon-shiminqia', 19: 'icon-jinbi', 14: 'icon-gouwuka', 22: 'icon-fanqia',
};
onMounted(() => {
  sortHandler();
  paytypeList.value = paytypeList.value.map((item) => ({ ...item, class: list[item.paymentIndex] || 'icon-huaban179' }));
});

const sortHandler = () => {
  const typeListDom = document.querySelector('.type-list');
  Sortable.create(typeListDom, {
    onEnd({ newIndex, oldIndex }) {
      paytypeList.value.splice(newIndex, 0, paytypeList.value.splice(oldIndex, 1)[0]);
      const newArr = paytypeList.value.slice(0);
      paytypeList.value = newArr;
    },
  });
};

defineExpose({
  paytypeList,
});

</script>

<style lang="scss" scoped>

</style>
