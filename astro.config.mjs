import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hackathon.chat', // 你的自定义域名
  base: '/', // 因为使用自定义域名，所以用根路径
  output: 'static', // 确保是静态输出
  build: {
    assets: 'assets'
  }
});
