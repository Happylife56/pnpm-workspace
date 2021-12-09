<template>
  <ul class="shop-card">
    <li v-for="(store, index) in listData" :key="index" :style="{ height: height }">
      <div class="card-info">
        <!-- <img v-if="store.imageUrl" :src="imageHost + store.imageUrl" alt="图片无法加载"> -->
        <img src="../image/shopImg.png" alt="图片无法加载">
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
      <div class="card-set">
        <k-button type="primary" plain size="small" :icon-lock="getEditor()" @click="openMachine(store.id)">
          机器号管理
        </k-button>
        <k-button type="primary" plain size="small" :icon-lock="getEditor('store')" @click="editStore(store)">
          编辑
        </k-button>
        <k-button size="small" :icon-lock="getEditor('store')" @click="deteleStore(store.id, index)">
          删除
        </k-button>
      </div>
    </li>
    <!-- <deleteDialog ref="vCode" :is-show-dialog="isShowDialog" @close="closeDialog" :shop-id="shopId" :delete-phone="deletePhone" :title="'提示'" @confirm="confirm" @regetVcode="getDeleteCode" /> -->
  </ul>
</template>

<script setup>

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
  // 当前的页数
  currentPage: {
    type: Number,
    default: 1,
  },
});
console.log(props);
const getEditor = (type) => {
  if (type) return false;
  return true;
};

const openMachine = () => {};
const editStore = () => {};
const deteleStore = () => {};
</script>

<style lang="scss" scoped>
//门店列表
.shop-card {
  align-content: flex-start; // justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 2%;

  li {
    @include flex-column();
    // height: 200px;
    border: 1px solid $borderdivcolor;

    box-sizing: border-box;
    padding: 1% 1.5% 0;
    width: 32%;

    &:nth-child(3n-1) {
      margin: 0 2% 2%;
    }

    .card-set {
      @include flex-type(flex-end, center);
      border-top: 1px solid $borderdivcolor;
      flex: 1;
    }
  }

  .card-info {
    display: flex;
    height: 120px;

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
