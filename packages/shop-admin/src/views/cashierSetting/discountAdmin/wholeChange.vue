<template>
  <ul>
    <li class="flex-align-center mb10" v-for="list in wholeChangeData" :key="list.key">
      <span class="flex-shrink">
        {{ list.name + '：' }}
      </span>
      <div>
        <el-tag closable v-for="(item,index) in list[list.key]" :key="index" class="mr10 mb10" @close="deleteItem(item)">
          {{ formatLabelText(item,list) }}
        </el-tag>
        <el-button type="primary" size="small" class="mb10" :disabled="list[list.key].length >= 6" @click="addHandlers(list)">
          添加
        </el-button>
      </div>
    </li>
  </ul>
  <k-dialog width="420px" :title="selectType.name" v-model="visible" @confirm="confirmHandle">
    <div class="flex-center">
      <span class="flex-shrink">{{ selectType.explain }}</span>
      <k-input :placeholder="selectType.placeholder" v-model="setInput" />
    </div>
  </k-dialog>
</template>

<script setup>
import { ref } from 'vue';

const wholeChangeData = ref([
  {
    name: '整单折扣', key: 'discountsList', placeholder: '例：8折，输入8', id: 0, explain: '折扣：', discountsList: [],
  },
  {
    name: '整单减价', key: 'subtractPriceList', placeholder: '例：减5元，输入5', id: 1, explain: '减价：', subtractPriceList: [],
  },
  {
    name: '改价原因', key: 'reasonList', placeholder: '请输入改价原因', id: 2, explain: '原因：', reasonList: [],
  },
]);
const visible = ref(false);
const selectType = ref({});
const setInput = ref('');
const addHandlers = (list) => {
  console.log('list: ', list);
  visible.value = true;
  selectType.value = list;
};
const deleteItem = () => {};

const confirmHandle = () => {
  visible.value = false;
};
</script>

<style lang="scss" scoped>

</style>
