<template>
  <div class="text-right mt20" v-if="total > size">
    <el-config-provider :locale="locale">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" v-model:currentPage="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="size" :layout="layoutList" :total="total" :small="small" />
    </el-config-provider>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

export default defineComponent({
  name: 'KPage',
  props: {
    modelValue: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    total: { type: Number, default: 9 },
    showSize: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
  },
  components: { ElConfigProvider },
  emits: ['update:modelValue', 'update:size', 'current-change', 'size-change', 'change'],
  setup(props, { emit }) {
    const locale = zhCn;
    const currentPage = computed({
      get() {
        return props.value;
      },
      set(value) {
        emit('update:modelValue', value);
      },
    });
    const layoutList = computed(() => {
      const list = ['total', 'sizes', 'prev', 'pager', 'next', 'jumper'];
      if (!props.showSize) list.splice(1, 1);
      return list.join(',');
    });
    const handleSizeChange = (val) => {
      currentPage.value = 1;
      emit('update:size', val);
      emit('size-change', val);
      emit('change');
    };
    const handleCurrentChange = (val) => {
      emit('current-change', val);
      emit('change');
    };
    return {
      locale, currentPage, layoutList, handleSizeChange, handleCurrentChange,
    };
  },
});

</script>

<style lang="scss" scoped>

</style>
