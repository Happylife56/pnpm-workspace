<template>
  <!-- 错误处理 -->
  <div class="not-created">
    <div class="no-store" v-if="!bitCreate">
      <img src="../image/download.png"><br>
      <span> 未创建店铺，请先
        <el-link :underline="false" type="primary" @click="bitCreate = true">
          创建店铺
        </el-link>
      </span>
    </div>
    <iframe :src="setStoreUrl" frameborder="0" width="100%" height="100%" v-else />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const bitCreate = ref(false);

//  设置店铺链接
const setStoreUrl = computed(() => {
  const hostUrl = judgeEnv();
  return `${hostUrl}/html/staff/index.html#/`;
});

const judgeEnv = () => {
  const { href } = window.location;
  if (href.includes('duofriend')) return 'https://core.duofriend.com';
  if (href.includes('https://nb')) return 'https://nbcore.deeptel.com.cn';
  return 'https://core.deeptel.com.cn';
};
</script>

<style lang="scss" scoped>
.not-created {
  @include flex-type(center, null);
  height: 100%;
  width: 100%;

  .no-store {
    @include flex-types(null, center);
    margin-top: 200px;
  }
}
</style>
