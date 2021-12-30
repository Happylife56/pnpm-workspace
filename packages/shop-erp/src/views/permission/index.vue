<template>
  <!-- 权限操作 -->
  <div class="permission-operation flex-column">
    <div class="operate-content flex-center">
      <!-- 没有门店 -->
      <div class="no-store flex-column flex-between">
        <div class="title-warn flexs-center">
          <img src="../../assets/image/edit.png" alt="">
          <p class="margin-text">
            使用系统前，请完善基础信息
          </p>
        </div>
        <div class="handle-process flex-column color-66">
          <ul class="process-ul flex-align-center" v-for="process in stepList" :key="process.id">
            <li class="flexs-center">
              <span>{{ process.title }}</span>
              <div class="margin-text">
                <a :href="backAdminUrl" target="_blank">
                  <el-button type="danger" :disabled="process.disabled">
                    前往设置
                  </el-button>
                </a>
              </div>
            </li>
            <li v-for="(item,index) in process.processList" :key="index" class="flexs-center">
              <i class="iconfont" :class="item.iconfont" />
              <div>{{ item.title }}</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 没有权限 -->
      <div class="no-permission" v-if="false">
        <ul class="permission-ul">
          <li class="flex-center">
            <img src="../../assets/image/permission.png" alt="">
          </li>
          <li class="margin-text flex-center color-66">
            抱歉，您还没有该功能的权限
          </li>
          <li class="mt10 flex-center color-66">
            请联系管理员开通权限
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const stepList = [
  {
    id: 1,
    title: '步骤1：完善商家信息',
    processList: [
      { iconfont: 'icon-fangzi', title: '创建门店' },
      { iconfont: 'icon-zhankai2', title: '' },
      { iconfont: 'icon-yuangongxinxi', title: '配置员工角色' },
      { iconfont: 'icon-zhankai2', title: '' },
      { iconfont: 'icon-zhanghao', title: '新增员工账号' },
    ],
  },
  {
    id: 2,
    title: '步骤2：录入店铺信息',
    disabled: true,
    processList: [
      { iconfont: 'icon-dianpu', title: '创建门店' },
      { iconfont: 'icon-zhankai2', title: '' },
      { iconfont: 'icon-diannao', title: '机器号管理' },
      { iconfont: 'icon-zhankai2', title: '' },
      { iconfont: 'icon-tianjiashangpin', title: '添加商品' },
      { iconfont: 'icon-zhankai2', title: '' },
      { iconfont: 'icon-shezhi2', title: '配置基础设置' },
    ],
  },
];

const backAdminUrl = ref('#');

</script>

<style lang="scss" scoped>
.permission-operation {
  height: 100%;

  .operate-content {
    background: #fff;
    flex: 1;
    margin: 10px;
    margin-top: 0;

    .margin-text {
      margin-top: 30px;
    }
  }

  .no-store {
    height: 570px;
    width: 968px;

    .handle-process {
      border: solid 1px #dfe4ed;
      font-size: 16px;
      height: 310px;
      justify-content: space-between;
      padding: 60px 0;
      position: relative;

      &::after {
        background: #fff;
        content: '系统初始设置流程';
        left: 392px;
        padding: 0 20px;
        position: absolute;
        top: -10px;
      }

    }

    .process-ul {
      padding: 0 50px;

      li {
        line-height: 2;
        padding: 0 18px;

      }

      .iconfont {
        color: #ccc;
        font-size: 32px;
      }
    }
  }

}
</style>
