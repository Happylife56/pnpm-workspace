<template>
  <div>
    <el-input v-bind="$attrs" v-model="inputValue" clearable @change="changeHandle">
      <template #suffix>
        <el-icon class="el-input__icon">
          <search />
        </el-icon>
      </template>
    </el-input>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
});

const emit = defineEmits(['update:modelValue', 'change']);
const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const changeHandle = (value) => emit('change', value);

</script>

<style lang="scss" scoped>

</style>
