import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

const { resolve } = require('path');

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [vue()],
    base: '/admin/',
    // build: {
    //   outDir: process.env.VITE_APP_DIR,
    // },
    server: {
      // host: 'shop1.deeptel.com.cn',
      // open: true,
      port: 8008, // 配置启用的端口号
      proxy: {
        '/shops': {
          target: 'https://shop.deeptel.com.cn', // 测试
          changeOrigin: true,
        },
      },
    },
    resolve: {
      // 设置别名
      alias: {
        '@': resolve(__dirname, 'src/'),
        '@/views': resolve(__dirname, 'src/views/'),
        '@/styles': resolve(__dirname, 'src/styles/'),
      },
    },
    css: {
      preprocessorOptions: {
        // 引入公用的样式
        scss: {
          additionalData: '@import "@/styles/common.scss";',
        },
      },
    },
  });
};
