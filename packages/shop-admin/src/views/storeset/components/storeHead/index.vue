<template>
  <div class="store-header flex-between">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: props.params.homePage }">
        {{ props.params.homeText }}
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: props.params.childPath }" v-if="props.params.childText">
        {{ props.params.childText }}
      </el-breadcrumb-item>
      <el-breadcrumb-item v-if="props.params.childPath">
        {{ props.params.thirdTitle }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <slot />
  </div>
</template>

<script setup>

const props = defineProps({
  params: {
    type: Object,
    default: () => ({
      homePage: '',
      homeText: '',
      childPath: '',
      childText: '',
      thirdTitle: '',
    }),
  },
});
</script>

<style lang="scss">
.store-header {
  border-bottom: 1px solid $borderdivcolor;
  height: 50px;
  padding: 0 20px;

  .el-icon {
    font-size: 16px;
  }
}

</style>
