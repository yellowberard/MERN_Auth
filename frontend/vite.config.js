import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': { // this tell that whenever there is backend request i.e request with /api it will redirect to 6969
        target: ' http:// localhost:6969',
        changeOrigin: true,
      }
    }
  }
})