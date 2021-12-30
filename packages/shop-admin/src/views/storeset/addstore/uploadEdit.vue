<template>
  <!-- @file 上传和编辑图片 -->
  <div class="upload-out">
    <div class="upload-image" @click="materiallayer" @mouseenter="hoverShow = true" @mouseleave="hoverShow = false">
      <img v-if="seletedUrl" :src="seletedUrl" alt="">
      <span v-else> + </span>
      <k-dialog v-model="materialVisible" title="素材库" width="900px" :show-footer="false">
        <iframe :src="materialUrl" width="820" height="520" frameborder="0" scrolling="no" />
      </k-dialog>
      <ul v-if="seletedUrl && hoverShow" class="hover-div" @click.stop="">
        <li>
          <i class="el-icon-view" @click.stop="lookImageVisible = true" />
        </li>
        <li>
          <i class="el-icon-delete" @click="delImage" />
        </li>
      </ul>
      <k-dialog v-model="lookImageVisible" title="查看图片" custom-class="center-dialog">
        <div class="text-center">
          <img :src="seletedUrl" style="width: 300px;">
        </div>
      </k-dialog>
    <!-- <span>图片尺寸：72*72px</span> -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  modelValue: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue']);

const materialVisible = ref(false);
const materialUrl = ref('https://suc.deeptel.com.cn//html/image/index.html#/?selectType=0');

const seletedUrl = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const lookImageVisible = ref(false);
const hoverShow = ref(false); // 是否现在

watch(() => props.materialVisible, (val) => {
  window.removeEventListener('message', eventHandle);
  val && window.addEventListener('message', eventHandle, false);
});

const materiallayer = async () => {
  materialVisible.value = true;
};

const eventHandle = () => {
  function image(id, url) {
    seletedUrl.value = url;
    materialVisible.value = false;
  }

  // eslint-disable-next-line no-unused-vars
  function closeMask() {
    materialVisible.value = false;
  }

  // eslint-disable-next-line no-unused-vars
  function openMask() {
    // console.log('打开');
  }
  // eslint-disable-next-line no-restricted-globals
  const detail = event?.data;
  // eslint-disable-next-line no-eval
  if (detail) eval(detail);
};
    // 删除图片
const delImage = () => {
  seletedUrl.value = '';
};

</script>

<script>
export default {
  watch: {
    materialVisible(val) {
      // 上传图片
      window.removeEventListener('message', this.eventHandle);
      val && this.watchMessage(); // 打开素材库的时候开启监听事件
    },
    codeUrl(val) {
      this.seletedUrl = val; // 设置二维码图片
    },
  },
  methods: {
    // 上传图片调素材库
    async materiallayer() {
      // 获取素材库的链接
      this.materialVisible = true;
      // const result = await storeSet.getMaterialUrl();
      // if (result) this.materialUrl = `${result.materialUrl}/html/image/index.html#/?selectType=0`;
    },
    // 素材库的回调的方法
    watchMessage() {
      window.addEventListener('message', this.eventHandle, false);
    },
    // 事件操作

  },
};

</script>

<style lang="scss" scoped>

.upload-image {

  @include flex-type(center, center);
  background-color: #fbfdff;
  border: solid 1px #d8dce5;
  border-radius: 4px;
  color: #8c939d;

  cursor: pointer;
  font-size: 40px;
  height: 148px;
  margin-right: 10px;
  position: relative;
  width: 148px;

  img {
    height: 100%;
    width: 100%;
  }

  .hover-div {

    @include flex-type(center, center);
    background: rgba(0, 0, 0, 0.3);
    height: 100%;
    position: absolute;
    width: 100%;

    .el-icon-view,
    .el-icon-delete {
      color: #fff;
      font-size: 30px;
      z-index: 20;
    }

    .el-icon-view {
      margin-right: 10px;
    }
  }

  .text-center {
    text-align: center;
  }
}
</style>
