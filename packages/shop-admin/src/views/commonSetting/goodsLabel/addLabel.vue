<template>
  <div class="add-label mt20">
    <el-button type="primary" @click="tagVisible = true" :disabled="labelsList.length >= 12">
      添加标签
    </el-button>
    <div class="label-list mt20" v-if="labelsList.length">
      <el-tag v-for="(tag, index) in labelsList" :key="index" closable class="mr20 mb20" @close="handleClose(tag)">
        {{ tag.labelName }}
      </el-tag>
    </div>
    <!-- 没有数据的时候 -->
    <emptyData tips="暂无标签" v-else />
    <k-dialog width="420px" title="添加标签" v-model="tagVisible" @confirm="addTagHandle" @close="tagName = ''">
      <el-input placeholder="请输入标签名称" clearable v-model="tagName" />
    </k-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import emptyData from '@/components/emptyData.vue';

const labelsList = ref([{ labelName: 1 }, { labelName: 2 }]);
const tagVisible = ref(false);
const tagName = ref('');

const addTagHandle = () => {};
const handleClose = (tag) => {
  console.log('tag: ', tag);
};
</script>

<style lang="scss" scoped>
.label-list {
  border: solid 1px $borderdivcolor;
  border-radius: 4px;
  padding: 20px;
  padding-bottom: 0;
}
</style>
