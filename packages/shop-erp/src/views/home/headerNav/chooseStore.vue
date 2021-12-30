<template>
  <div class="choose-store">
    当前门店：
    <el-dropdown trigger="click" size="small" @command="commandHandle">
      <span class="el-dropdown-link">
        {{ selectName }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :command="item.id" v-for="item in storeList" :key="item.id">
            {{ item.name }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <selectMachine />
</template>

<script setup>
import { ref, computed } from 'vue';
import { ArrowDown } from '@element-plus/icons';
import selectMachine from '../selectMachine/index.vue';

const storeList = ref([
  { id: 33, name: 'GEMEN' },
  { id: 34, name: '谷通科技深圳研发' },
  { id: 43, name: '广东谷通科技有限公司' },
]);

const selectName = computed(() => {
  let list = storeList.value;
  if (shopId.value) list = storeList.value.filter((item) => item.id === shopId.value);
  const [store] = list;
  return store?.name || '请选择';
});
const shopId = ref('');
const commandHandle = (command) => {
  console.log('command: ', command);
};
</script>

<style lang="scss" scoped>

</style>
