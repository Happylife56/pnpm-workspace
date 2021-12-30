<template>
  <k-dialog v-model="isShowDialog" width="560px" @close="closeHandler" @confirm="confirmHandler">
    <div class="delete-store">
      <p class="tips">
        <i class="el-icon-warning" />
        若删除店铺，该店铺相关设置将丢失，请谨慎操作！短信验证码发送至
        安全手机{{ deletePhone }}，请输入验证码进行确认：
      </p>
      <codeInput :key="isShowDialog" v-model="codeValue" ref="codeInputRef" />
      <span :class="{ reget: !disabled, normal: disabled }">
        <el-button type="text" :disabled="disabled" @click="regetVcode">
          {{ btnTxt }}
        </el-button>
      </span>
    </div>
  </k-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useMessage } from '@common/core';
import codeInput from './codeInput.vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  deletePhone: {
    type: String,
    default: '',
  },
  shopId: {
    type: Number,
    default: null,
  },
});
const emit = defineEmits(['update:modelValue']);
const isShowDialog = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
const pwdList = ref([]);
const disabled = ref(false);
const btnTxt = ref('获取验证码');
const codeValue = ref('');

// 重新获取验证码
const codeInputRef = ref(null);
const regetVcode = () => {
  pwdList.value = [];
  getDeleteCode();
  codeInputRef.value.clearPwdList();
  getInterval();
};
const getDeleteCode = () => {
  console.log('获取验证码');
};
// 1分钟倒计时
const timer = ref(null);
const interval = ref(60);
const getInterval = () => {
  const t1 = parseInt(new Date().getTime() / 1000, 10);
  disabled.value = true;
  timer.value = setInterval(() => {
    const t2 = parseInt(new Date().getTime() / 1000, 10);
    const time = t2 - t1;
    interval.value = 60 - time;
    btnTxt.value = `重新获取（${interval.value}）s`;
    if (interval.value <= 0) {
      clearInterval(timer.value);
      timer.value = null;
      interval.value = 60;
      disabled.value = false;
      btnTxt.value = '重新获取';
    }
  }, 1000);
};

// 关闭弹窗清空定制器并重置数据
const closeHandler = () => {
  clearInterval(timer.value);
};

const { message } = useMessage();
const confirmHandler = () => {
  if (!codeValue.value || (codeValue.value && codeValue.value.length < 4)) {
    message.warning('请输入验证码');
    codeInputRef.value.changePwd();
  } else {
    isShowDialog.value = false;
  }
};

// export default {

//   data() {
//     return {
//       id: 0,
//       dialogVisible: false,
//       pwdList: [],
//       oldPwdList: [],
//       isDelete: false,
//       ipt: '',
//       btnTxt: '获取验证码',
//       interval: 179,
//       timer: null,
//       disabled: false,
//     };
//   },
//   watch: {
//     isShowDialog(val) {
//       this.dialogVisible = val;
//     },
//   },
//   methods: {

//     confirm() {
//       if (pwdList.value.length < 4) {
//         this.$message.error('请输入验证码');
//       } else {
//         const code = pwdList.value.join('');
//         this.$emit('confirm', code);
//       }
//     },

//   },
// };
</script>
<style lang="scss" scoped>
.delete-store {
  margin-left: 10px;
}

.tips {
  align-items: center;
  display: flex;
  line-height: 25px;
  padding-right: 53px;

  span {
    color: #409eff;
  }
}

.normal,
.reget {
  color: #999;
  margin-top: 20px;
}

.reget {
  color: #409eff;
}

.reset-btn {
  color: #409eff;
  cursor: pointer;
  margin-left: 10px;
}

.el-icon-warning::before {
  color: #f7ba2a !important;
  font-size: 30px !important;
  padding-right: 10px;
}
</style>
