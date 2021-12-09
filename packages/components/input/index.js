// 导入组件，组件必须声明 name
import KInput from './main.vue';

// 为组件提供 install 安装方法，供按需引入
KInput.install = function (app) {
  app.component(KInput.name, KInput);
};

// 默认导出组件
export default KInput;