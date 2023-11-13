//  vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import myPlugin from './zip'
import requireTransform from 'vite-plugin-require-transform';
// https://vitejs.dev/config/
export default defineConfig({
plugins: [
    vue(),
    myPlugin(),
    requireTransform({
	    fileRegex:/.js$|.jsx$|.vue$/
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/.pnpm/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})