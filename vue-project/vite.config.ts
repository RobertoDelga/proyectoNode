import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'
import tailwind from 'tailwindcss'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
