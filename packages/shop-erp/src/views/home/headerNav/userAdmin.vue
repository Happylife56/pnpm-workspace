<template>
  <div class="user-admin">
    <el-popover placement="bottom" width="auto" trigger="click">
      <template #reference>
        <i class="iconfont icon-yonghutouxiang ml20 mr20" />
      </template>
      <ul class="user-popover">
        <li v-for="item in popoverList" :key="item.key" class="user-item">
          <i class="iconfont mr10" :class="item.iconfont" />
          <span>
            <span>{{ item.title }}</span>
            <span>{{ item.key }}</span>
          </span>
        </li>
      </ul>
    </el-popover>
  </div>
</template>

<script setup>
const popoverList = [
  { title: '收银员：', iconfont: 'icon-yonghutouxiang', key: 'admin' },
  { title: '我的营收：', iconfont: 'icon-jin', key: 'jin' },
  { title: '当班时长：', iconfont: 'icon-shichang', key: 'shichang' },
  { title: '加班/退出', iconfont: 'icon-tuichu' },
];
</script>

<style lang="scss" scoped>
.user-popover {
  .iconfont {
    font-size: 20px;
  }

  .user-item {
    line-height: 1.6;

    &:last-child {
      border-top: 1px solid var(--border-color);
      margin-top: 6px;
      padding-top: 4px;
    }
  }
}
</style>
