import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'public')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir : true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        nested: resolve(root, 'about', 'index.html'),
      },
    },
  },
})
