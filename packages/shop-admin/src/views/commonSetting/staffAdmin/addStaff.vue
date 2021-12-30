<template>
  <add-picker title="选择员工" v-model="staffVisible">
    <template #top>
      <el-row :gutter="10" class="mb10">
        <el-col :span="8">
          <el-input placeholder="请输入员工姓名或者手机号码" v-model="search" />
        </el-col>
      </el-row>
    </template>
  </add-picker>
</template>

<script setup>
import { ref, computed } from 'vue';
import addPicker from '@/components/addPicker/index.vue';

const props = defineProps({
  modelValue: { type: Boolean, default: false },
});
const emit = defineEmits(['update:modelValue']);
const staffVisible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
const search = ref('');
</script>

<style lang="scss" scoped>

</style>
