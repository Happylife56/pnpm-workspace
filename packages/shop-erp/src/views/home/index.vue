<template>
  <el-container class="home">
    <el-aside width="125px">
      <asideMueu />
    </el-aside>
    <el-container>
      <el-header>
        <headerTabs />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import asideMueu from './asideMenu.vue';
import headerTabs from './headerNav/index.vue';

</script>

<style lang="scss" scoped>
.el-header {
  height: 40px;
  padding: 0;
}
</style>
