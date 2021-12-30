<template>
  <ul class="explain-handle">
    <li v-if="title">
      {{ title }}
    </li>
    <li class="text-list">
      <slot>分配员工权限后，无权限员工对钱箱、退货、赊账操作需要授权才能完成。</slot>
    </li>
    <li v-if="showStore">
      <selectStore v-model="shopId" @change="changeHandle" />
    </li>
  </ul>
</template>

<script setup>
import { ref, watch } from 'vue';
import selectStore from './selectStore.vue';

defineProps({
  title: {
    type: String,
    default: '',
  },
  showStore: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
});

const shopId = ref('');
const emit = defineEmits(['change', 'update:modelValue']);
const changeHandle = (id) => emit('change', id);
watch(() => shopId.value, (val) => {
  if (val) changeHandle(val);
}, { immediate: true });

</script>

<style lang="scss" scoped>
.explain-handle {
  background-color: #f4f4f4;
  padding: 20px;

  li:not(:last-child) {
    margin-bottom: 12px;
  }

  .text-list {
    line-height: 1.6;
  }
}
</style>
