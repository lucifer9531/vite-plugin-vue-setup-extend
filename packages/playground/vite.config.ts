import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// @ts-ignore
import plugin from '../core/dist/index.js'

export default defineConfig({
  plugins: [vue(), plugin()],
})
