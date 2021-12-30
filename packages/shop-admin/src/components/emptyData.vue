<template>
  <div class="empty-data flexs-center">
    <i class="icon" :class="icon" />
    <slot>暂无商品</slot>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EmptyData',
  props: {
    icon: {
      type: String,
      default: 'el-icon-warning',
    },
  },
});
</script>
<style lang="scss" scoped>
.empty-data {
  border: 1px solid #d8dce5;
  border-radius: 6px;
  height: 120px;
  margin: 24px 0;
  width: 100%;

  .icon {
    color: #cecece;
    font-size: 32px;
    margin-bottom: 20px;
  }
}
</style>
