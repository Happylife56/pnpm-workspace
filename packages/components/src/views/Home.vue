<template>
  <div class="home">
    <KButton>测试</KButton>
    <div>
      <KInput v-model="test">
        <template #prepend>
          123
        </template>
      </KInput>
    </div>
  </div>
</template>

<script setup>
import { getNow, request } from '@common/core';
import { ref } from 'vue';
import { KButton } from '@/components/index';
import KInput from '@/components/input';

console.log('getNow, request: ', getNow, request);
const test = ref(123);

</script>
<style lang="scss" scoped>

</style>
