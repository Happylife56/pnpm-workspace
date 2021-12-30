<template>
  <div class="vcode-input">
    <input v-for="(v, i) in 4" :key="i" v-model="pwdList[i]" maxlength="1" class="shortInput" @input="changeInput" @click="changePwd" @keyup="keyUp($event)" @keydown="oldPwdList = pwdList.length">
  </div>
</template>

<script setup>
import {
  ref, nextTick, onMounted, watch,
} from 'vue';

// 弹窗打开自动获取焦点
const ipt = ref(null);
const open = () => {
  ipt.value = document.getElementsByClassName('shortInput');
  nextTick(() => {
    ipt.value[0].focus();
  });
};
onMounted(() => {
  pwdList.value = [];
  open();
});

const isDelete = ref(false);
const oldPwdList = ref(0);
const pwdList = ref([]);

const emit = defineEmits(['update:modelValue']);
watch(() => pwdList.value, (val) => {
  emit('update:modelValue', val.join(''));
}, { deep: true });

const keyUp = (ev) => {
  let index = pwdList.value.length;
  if (!index) return;
  if (ev.keyCode === 8) {
    isDelete.value = true;
    if (oldPwdList.value === pwdList.value.length) {
      if (index === pwdList.value.length) {
        pwdList.value.pop();
      }
      index--;
    } else {
      index > 0 && index--;
    }
    ipt.value[index].focus();
  } else if (
    isDelete.value
        && index === pwdList.value.length
        && /^\d$/.test(ev.key)
  ) {
    isDelete.value = false;
    pwdList.value.pop();
    pwdList.value.push(ev.key);
    ipt.value[pwdList.value.length] && ipt.value[pwdList.value.length].focus();
  }
};

const changeInput = () => {
  let index = pwdList.value.length;
  const val = pwdList.value[index - 1];
  if (!/[0-9]/.test(val)) {
    pwdList.value.pop();
    return;
  }
  if (!val) {
    pwdList.value.pop();
    index--;
    if (index > 0) ipt.value[index - 1].focus();
  } else if (index < 4) ipt.value[index].focus();
};
const changePwd = () => {
  let index = pwdList.value.length;
  index === 4 && index--;
  ipt.value[index].focus();
};

// 验证码过期或验证码错误清空密码框
const clearPwdList = () => {
  pwdList.value = [];
  ipt.value[0].focus();
};

defineExpose({
  clearPwdList,
  changePwd,
});
</script>

<style lang="scss" scoped>
.vcode-input {
  display: inline-block;
  margin-left: 30px;
  margin-top: 30px;

  .shortInput {
    background: #fff;
    border: 1px solid #d8dce5;
    border-radius: 4px;
    font-size: 16px;
    height: 40px;
    margin-right: 10px;
    outline: none;
    text-align: center;
    width: 40px;

    &:focus {
      border: 1px solid #409eff !important;
      color: #409eff;
    }
  }

}

</style>
