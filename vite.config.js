import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/mangosteen-demo-1/dist/',  //build path
  plugins: [vue()]
})
