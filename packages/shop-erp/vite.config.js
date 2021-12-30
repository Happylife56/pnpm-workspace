/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
// import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const { resolve } = require('path');

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    server: {
      port: 8088, // 配置启用的端口号
    },
    resolve: {
    // 设置别名
      alias: {
        '@': resolve(__dirname, 'src/'),
      },
    },
    css: {
      preprocessorOptions: {
      // 引入公用的样式
        scss: {
          additionalData: '@use "@/styles/common.scss";@use "@/styles/element-variables.scss";',
        },
      },
    },
    plugins: [
      vue(),
      // AutoImport({
      //   resolvers: [ElementPlusResolver()],
      // }),
      Components({
        resolvers: [ElementPlusResolver({
          importStyle: 'sass',
        })],
      }),
    ],
  });
};
