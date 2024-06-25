import { fileURLToPath, URL } from 'node:url'
import legacy from '@vitejs/plugin-legacy'
import babel from 'vite-plugin-babel';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        // plugins: ["@babel/plugin-proposal-decorators", { "version": "legacy" }]
      }
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
