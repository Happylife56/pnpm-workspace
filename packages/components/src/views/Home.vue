<template>
  <div class="home">
    <SInput />
  </div>
</template>

<script setup>
import { getNow, request } from '@common/core';
import SInput from '@/components/input';

console.log('getNow, request: ', getNow, request);

</script>
<style lang="scss" scoped>
.home {
  @include flex-type(center, center);
}
</style>
