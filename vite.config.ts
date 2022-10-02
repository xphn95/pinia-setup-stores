import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Component from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import Import from 'unplugin-auto-import/vite'
import path from 'node:path'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': pathSrc
    }
  },
  plugins: [
    vue({
      reactivityTransform: true
    }),
    Component({
      dts: path.resolve(pathSrc, 'typings', 'components.d.ts')
    }),
    Unocss({
      mode: 'vue-scoped'
    }),
    Import({
      imports: [
        'vue',
        'pinia',
        'vue/macros'
      ],
      dts: path.resolve(pathSrc, 'typings', 'auto-imports.d.ts'),
      eslintrc: {
        enabled: true
      }
    })
  ]
})
