<template>
  <div class="hot-key">
    <el-tooltip content="快捷键说明【F1】" placement="bottom">
      <el-button type="text" size="small" @click="hotVisiable=true">
        <i class="iconfont icon-jianpan ml10 mr10" />
      </el-button>
    </el-tooltip>
  </div>
  <k-dialog title="收银热键说明【F1】" width="980px" v-model="hotVisiable" :show-footer="false">
    <ul class="ul-list">
      <li v-for="item in 30" :key="item" class="flex-between li-item">
        <span>{{ item.functionName }}</span>
        <span>【{{ item.buttonKey }}】</span>
      </li>
    </ul>
  </k-dialog>
</template>

<script setup>
import { ref } from 'vue';

const hotVisiable = ref(false);
</script>

<style lang="scss" scoped>

.ul-list {
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(4, 220px);

  .li-item {
    background: #f5f7f9;
    height: 48px;
    padding: 0 20px;
  }
}
</style>
