<template>
  <div>
    <span>选择门店：</span>
    <el-select v-model="selectId" placeholder="请选择" no-data-text="暂无数据">
      <el-option v-for="item in seleteStores" :key="item.id" :label="item.name" :value="item.id" />
    </el-select>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
});

const seleteStores = ref([
  { id: 33, name: '谷通科技' },
  { id: 36, name: '测试门店' },
]);

const emit = defineEmits(['update:modelValue', 'change']);
const selectId = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

onMounted(() => {
  selectId.value = 33;
});

// const changeHandle = (id) => {emit('change', id);

</script>

<style lang="scss" scoped>

</style>
