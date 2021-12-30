<template>
  <div class="other-set mt20">
    <div class="paytype-top">
      <div class="paytype-top-content">
        <span class="weight-600 mr10">
          {{ params.title }}
        </span>
        <span class="color-99 font-12">
          {{ params.explain }}
        </span>
      </div>
      <el-switch v-model="statue" active-text="已开启" inactive-text="未启用" />
    </div>
    <el-collapse-transition v-if="$slots.content">
      <div class="handler-set" v-if="statue">
        <slot name="content" />
      </div>
    </el-collapse-transition>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  params: {
    type: Object,
    default: () => ({
      title: '',
      explain: '',
    }),
  },
});
const emit = defineEmits(['update:modelValue']);
const statue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

</script>

<style lang="scss" scoped>
.other-set {
  border: solid 1px $borderdivcolor;

  .paytype-top {
    @include flex-type(space-between, center);
    background-color: #f5f7fa;
    height: 40px;
    line-height: 3;
    padding: 0 15px;

    .paytype-top-content {
      @include flex-type(null, center);
    }
  }

  .handler-set {
    margin: 20px 0;
    padding: 0 20px;
  }

}
</style>
