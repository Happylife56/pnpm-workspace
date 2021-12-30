<template>
  <el-radio-group v-model="radio" size="small" class="base-radio" :class="{'border-radio':isBorder}" v-bind="$attrs">
    <el-radio-button v-for="(item,index) in list" :key="item.id" :label="item.id" :class="{'select-style':item.selected}">
      <slot :item="item" :index="index" />
    </el-radio-button>
  </el-radio-group>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  list: { type: Array, default: () => [] },
  isBorder: { type: Boolean, default: false },
});
const emit = defineEmits(['update:modelValue']);
const radio = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>

<style lang="scss">
.base-radio {
  .el-radio-button__inner {
    border: 1px solid var(--border-color) !important;
    border-radius: 4px !important;
  }

  .el-radio-button:not(last-child) {
    margin-bottom: 20px;
    margin-right: 30px;
  }

  .is-active {
    border: none !important;

    .iconfont {
      color: #fff;
    }

    .el-radio-button__inner {
      border: none !important;
      box-shadow: 1px 0 0 0 #fff;
    }

  }
}

.border-radio {
  .select-style,
  .is-active {
    .el-radio-button__inner {
      background: #fff !important;
      border: 1px solid var(--theme-color) !important;
      color: var(--theme-color) !important;
    }

    .iconfont {
      color: var(--theme-color);
    }
  }

  .el-radio-button__inner:hover {
    border: 1px solid var(--theme-color) !important;

    .iconfont {
      color: var(--theme-color) !important;
    }
  }
}
</style>
