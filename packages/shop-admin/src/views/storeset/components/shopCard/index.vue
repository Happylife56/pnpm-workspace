<template>
  <ul class="shop-card">
    <li v-for="(store, index) in listData" :key="index" :style="{ height: props.height }" :class="[{'pointer':props.pointer},{ 'disabled-style': !store.bitSelect },{ 'store-clicked': store.id === selectStore.id }]" @click="changeStore(store)">
      <div class="card-info">
        <!-- <img v-if="store.imageUrl" :src="imageHost + store.imageUrl" alt="图片无法加载"> -->
        <img src="../../image/shopImg.png" alt="图片无法加载">
        <div class="card-detail">
          <span class="card-detail-span">
            {{ store.name }}
          </span>
          <el-tooltip class="item" effect="light" :content="store.phoneNumber ? store.phoneNumber : '暂无数据'" placement="top-start">
            <span class="text-overflow">
              联系电话：{{ store.phoneNumber }}
            </span>
          </el-tooltip>
          <el-tooltip class="item" effect="light" :content="store.address ? store.address : '暂无数据'" placement="top-start">
            <span class="text-overflow">
              地址：{{ store.address }}
            </span>
          </el-tooltip>
        </div>
      </div>
      <slot name="card-set" :store="store" :index="index" />
      <div class="outline" />
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  listData: {
    type: Array,
    default: () => [
      {
        id: 47,
        address: '惠城区东平半岛惠州大道20号',
        bitCashBox: true,
        bitCommission: false,
        bitDel: false,
        bitGiveAway: true,
        bitInTax: false,
        bitManagerCommission: false,
        bitPromotion: true,
        bitStaffCommission: false,
        bitStair: false,
        changeExtent: 0.5,
        computeMode: 0,
        createDate: '2018-09-20 10:14:57',
        imageUrl: '/matel/202111/image/1637914798811_7WSprycZG.jpeg',
        latitude: '23.088852',
        longitude: '114.437042',
        machineNumber: 1,
        name: 'python-selenium自动化e',
        payTypes: '10,0,5,11,9,8,1,19',
        phone: '15768659210',
        rootUid: 36,
        stairType: 0,
        taxExtent: 0,
        tel: '',
        uName: 'goodtom',
        uType: 1,
        userId: 36,
        versions: 0,
        addMoney: 5,
        exceedRange: 1,
        fixMoney: 20,
        sendMoney: 100,
        sendMoneyType: 2,
        fixRange: '10.0',
        starirsNumberMoney: 10,
        uname: 'goodtom',
        utype: 1,
      },
      {
        id: 118,
        address: '东平赛格',
        bitCashBox: false,
        bitCommission: false,
        bitDel: false,
        bitGiveAway: false,
        bitInTax: false,
        bitManagerCommission: false,
        bitPromotion: false,
        bitStaffCommission: false,
        bitStair: false,
        changeExtent: 0.5,
        computeMode: 0,
        createDate: '2018-11-07 20:28:32',
        imageUrl: '/image/36/1525945977754/8F14E45FCEEA167A5A36DEDD4BEA2543.jpg',
        latitude: '23.084122',
        longitude: '114.382541',
        machineNumber: 1,
        name: '客来驿专用门店（修改）',
        payTypes: '10,0',
        phone: '13888888888',
        rootUid: 36,
        stairType: 0,
        taxExtent: 0,
        tel: '13888888888',
        uName: 'goodtom',
        uType: 1,
        userId: 36,
        versions: 0,
        starirsNumberMoney: 0,
        uname: 'goodtom',
        utype: 1,
      },
    ],
  },
  height: {
    type: String,
    default: '190px',
  },
  pointer: {
    type: Boolean,
    default: false,
  },
});

const selectStore = ref({});

const emit = defineEmits(['update:modelValue']);
const changeStore = (store) => {
  if (props.pointer) {
    console.log('store: ', store);
    selectStore.value = store;
    emit('update:modelValue', selectStore.value);
  }
};

</script>

<style lang="scss" scoped>
//门店列表
.shop-card {
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  padding: 2%;

  li {
    @include flex-column();
    // height: 200px;
    border: 1px solid $borderdivcolor;

    box-sizing: border-box;
    justify-content: center;
    margin-bottom: 2%;
    padding: 15px;
    position: relative;
    width: 32%;

    &:nth-child(3n-1) {
      margin: 0 2% 2%;
    }

  }

  .card-info {
    display: flex;
    height: 100px;

    img {
      flex-shrink: 0;
      height: 100px;
      width: 100px;
    }

    .card-detail {
      @include flex-column();
      line-height: 2;
      margin-left: 10px;
      width: calc(100% - 120px);
    }

    .text-overflow {
      width: 90%;
    }

    .card-detail-span {
      font-weight: 600;
    }
  }

  li:not(.disabled-style):hover,
  .store-clicked {
    border: 1px solid #20a0ff;

    .outline {
      border-bottom: 50px solid #20a0ff;
      border-left: 50px solid transparent;
      bottom: 0;
      height: 0;
      position: absolute;
      right: 0;
      width: 0;
    }

    .outline::before {
      color: #fff;
      //  content: url("/src/assets/image/right.png");
      content: '✔';
      position: absolute;
      right: 4px;
      top: 26px;
    }
  }
}

@media screen and (min-width: 1560px) {
  .shop-card {
    li {
      width: 24%;

      &:nth-child(3n-1) {
        margin: 0;
      }

      &:nth-child(4n-1) {
        margin: 0 1% 1% 0;
      }

      &:nth-child(4n-2) {
        margin: 0 1% 1%;
      }
    }
  }
}
</style>
