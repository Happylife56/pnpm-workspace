<template>
  <div class="p20-d40">
    <explainHandle title="商品标签设置说明：" v-model="shopId" @change="changeStoreHandle">
      <p>
        1. 可自定义标签名字，至多可设置12个；
        2. 标签必须关联商品才能触发商品标签功能；
        3. 商品添加标签后将默认打印不干胶；
      </p>
    </explainHandle>
    <addLabel />
    <addGoods :shop-id="shopId" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import explainHandle from '@/components/explainHandle.vue';
import addLabel from './addLabel.vue';
import addGoods from './addGoods.vue';

const shopId = ref(33);
const changeStoreHandle = (id) => {
  console.log(id, '选择的门店');
  shopId.value = id;
};

</script>

<style lang="scss" scoped>

</style>
