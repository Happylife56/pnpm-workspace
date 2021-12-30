<template>
  <k-dialog
    title="选择机器号" width="688px"
    v-model="showMachine"
    :close-on-press-escape="false" :close-on-click-modal="false"
    :show-close="false"
  >
    <el-scrollbar max-height="420px">
      <BaseRadio :list="list" is-border v-model="machineId" class="machine-content">
        <template #default="{ item }">
          <div class="flexs-around machine-list" @click="clickHandle(item)">
            <div class="text-left">
              {{ item.name }}
            </div>
            <i class="iconfont icon-qiantai" />
            <div>{{ item.disabled ? '未使用':'使用中' }}</div>
          </div>
        </template>
      </BaseRadio>
    </el-scrollbar>
    <template #footer>
      <el-button type="primary" :disabled="!machineId" @click="confirmHandle">
        确认
      </el-button>
    </template>
  </k-dialog>
</template>

<script setup>
import { ref } from 'vue';
import BaseRadio from '@/components/BaseRadio.vue';

const machineId = ref(1);
const list = [
  { id: 1, name: 123, disabled: true },
  {
    id: 2, name: 234, disabled: false, selected: true,
  },
  { id: 3, name: 234, disabled: false },
];
const showMachine = ref(false);
const clickHandle = (item) => {
  console.log('item: ', item);
};
const confirmHandle = () => {
  console.log(6666);
  showMachine.value = false;
};
</script>

<style lang="scss" scoped>

  .machine-list {
    height: 100px;
    width: 100px;

    .text-left {
      text-align: left;
      width: 100%;
    }

    .test {
      width: 100%;
    }

    .iconfont {
      font-size: 40px;
    }
  }

</style>
