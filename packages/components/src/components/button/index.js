// 导入组件，组件必须声明 name
import KButton from './main.vue';

// 为组件提供 install 安装方法，供按需引入
KButton.install = function (app) {
  app.component(KButton.name, KButton);
};

// 默认导出组件
export default KButton;
