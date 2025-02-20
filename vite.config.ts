import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  build: {
    outDir: 'docs', // Specify the output directory
  },
  base: process.env.NODE_ENV === 'production'
    ? '/threetreeplace/' // Replace 'threetreeplace' with your repository name
    : '/',
})
