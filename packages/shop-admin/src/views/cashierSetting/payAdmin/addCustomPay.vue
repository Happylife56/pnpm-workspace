<template>
  <!-- 添加自定义支付 -->
  <div class="add-custom">
    <div class="flex-between mb20 bg-f8">
      <span>
        <span class="paytype-title">
          请设置你的支付方式
        </span>
        <span class="color-99 ml20">
          第一个为默认支付方式，鼠标点击拖拉可控制排序
        </span>
      </span>
      <el-button type="text" @click="openCustomPay" v-show="false">
        <i class="el-icon-circle-plus font-size18 mr10" />添加支付方式
      </el-button>
    </div>
    <!-- 支付方式 -->
    <slot name="list" />
    <template v-if="customPayList.length">
      <!-- 自定义支付方式 -->
      <el-divider content-position="left">
        自定义支付方式
      </el-divider>
      <div class="paytype-list">
        <div v-for="(type,index) in customPayList" :key="index" :label="type.paymentIndex" class="paytype-list-box">
          <div class="paytype-list-content">
            <div class="paytype-name">
              <div class="icon-span">
                <!-- <i class="iconfont" :class="type.class"></i> -->
                <i class="iconfont icon-huaban179" />
              </div>
              <span class="ml10 weight-600">
                {{ type.paymentName }}
              </span>
            </div>
            <div class="del-btn pointer" @click="deleteType(type)">
              <i class="el-icon-delete" /> 移除
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import {
  ref, nextTick, onMounted, onUnmounted,
} from 'vue';

import { useCommon } from '@common/core';

const shopId = ref('');
const customPayList = ref([]);

const { isDev, store } = useCommon();

onUnmounted(() => window.removeEventListener('message', parseMsg));
onMounted(() => {
  window.removeEventListener('message', parseMsg);
  window.addEventListener('message', parseMsg);
  // eslint-disable-next-line no-restricted-globals
  nextTick(() => parent.window.postMessage('finish', '*'));
  if (isDev) getCustomPayList();
});

const parseMsg = (msg) => {
  const { data: { type, data } = {} } = msg;
  if (type === 'shopId') {
    shopId.value = data.shopId;
    getShopSet({ shopId: data.shopId });
    store.commit('cashierSetting/setPayShopId', data.shopId);
    getCustomPayList(data.shopId);
  } else if (type === 'addPayType') {
    addCustomPayTag(data);
  }
};
// open
const openCustomPay = () => {};

// get list
const getCustomPayList = async (id) => {
  console.log('id: ', id);
  // const result = await cashierset.listPaySet({ shopId: id, selectType: 1 });
  // customPayList.value = result || [];
};

// add
const addCustomPayTag = async (data) => {
  console.log('data: ', data);
  // const { payTypeDesc: paymentName, payTypeId: customPayId, shopId } = data;
  // const result = await cashierset.shopPayment({
  //   paymentName, customPayId, paymentIndex: 15, shopId,
  // });
  // if (result) {
  //   this.getCustomPayList(this.shopId);
  //   this.$emit('input', this.customPayList);
  // }
};

const getShopSet = (id) => {
  console.log('id: ', id);
};

const deleteType = (tag) => {
  console.log('tag: ', tag);
};
</script>

<style lang="scss">

.add-custom {
  .bg-f8 {
    background-color: #f8f8f8;
    padding: 10px 15px;
  }

  .paytype-title {
    font-weight: 600;
  }

  .paytype-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .paytype-list-box {
      @include flex-type(null, center);
      background-color: #f0f3f7;
      height: 60px;
      margin-bottom: 20px;
      margin-right: 15px;
      width: calc(20% - 15px);

    }

    .del-btn {
      @include flex-type(null, center);
      color: #99a9bf;
      font-size: 12px;
      height: 60px;
    }

    .paytype-list-content {
      @include flex-type(space-between, center);
      flex: 1;
      padding: 0 12px;
    }

    .paytype-name {
      @include flex-type(null, center);
    }

    .icon-span {
      @include flex-type(center, center);
      background-color: $bluecolor;
      border-radius: 4px;
      height: 40px;
      width: 40px;

      .iconfont {
        color: #fff;
      }
    }
  }
}
</style>
