#### 商超收银平台：

1. 框架搭建
   
  + 技术栈

    pnpm + vite + elementPlus + Eslint + StyleLint     
   
  + worksapace   
    
      1. `@common/core` 一些Api、过滤器、message、form公用的Api、计算和结算的一些方法
      2. `@common/components` 公用的组件
      3. `@common/utils` 工具类封装一些方法
   
2. 项目结构

    ```
    shop-erp

    ├── index.html
    ├── package.json
    ├── process.md
    ├── public
    │   └── favicon.ico
    ├── src
    │   ├── App.vue
    │   ├── assets
    │   │   └── iconfont
    │   ├── components
    │   │   ├── HelloWorld.vue
    │   │   └── input
    │   ├── main.js
    │   ├── router
    │   │   └── index.js
    │   ├── store
    │   │   └── index.js
    │   ├── styles
    │   │   ├── common.scss
    │   │   ├── element-variables.scss
    │   │   ├── normalize.css
    │   │   └── transitons.scss
    │   ├── utils
    │   │   └── request.js
    │   └── views
    │       ├── collect
    │       └── home
    ├── vite.config.js
    └── yarn.lock
    ```
3. 配置 
  + `vite.config.js`
  
    - 插件引入element-plus `Components`
    - 按需引入（暂时不用）
    - 添加主题 `@use "@/styles/element-variables.scss";`
  
4. 规范 
  + 参数函数命名尽量语义化
  + class、function、attrs、slots等驼峰命名
  + 使用props，不要直接修改，可以使用`update:modelValue`进行修改
  + 使用组件传值尽量少点参数，如果太多，尽量使用对象形式传参
  + 如果公用的逻辑, 尽量拆出来, 统一使用`mixins`, 使用`use`开头驼峰命名
  + 如果添加路由，当前文件夹下创建router文件夹, 在router/index.js添加路由
  + 如果使用vuex, 当前文件夹下创建store文件夹, 在store/index.js添加状态管理, 也可以使用其他的模块
  + 如果使用vue、vue-router、vuex中的API，使用`@common/core`
    ```js
    import { useCommon } from '@common/core';
    const { ref, store, router, getState, getGetters, ... } = useCommon()

    // getState 获取state  getState('collect','count')
    // getGetters 获取getters  getGetters('collect','count')
    ``` 
  + 如果使用message, messageBox使用`@common/core` `useMessage`
    ```js
    import { useMessage } from '@common/core';
    const { message,mesageBox } = useMessage();

    message.error('错误提示')
    message.success('成功提示')

    // mesageBox
    mesageBox.confirm({ msg: '是否确认删除?' }).then(() => {
      message.success('删除成功');
    });
    ```
  + 如果使用form, 使用`@common/core` `useForm`
    ```js
    import { useForm } from '@common/core';
    const { ruleFormRef, submitForm, resetForm } = useForm();
    ```
  
  + 组件封装的尽量使用已经有的组件详细看`@common/components` 
    ```
    components
    ├── batch-table
    ├── breadcrumb
    ├── button
    ├── dialog
    ├── input
    ├── package.json
    ├── pagination
    ├── picker
    ├── table
    └── tabs
    ```
  
    
   
