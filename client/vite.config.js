import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: true,
    port: 1080,
    proxy: {
      '/api': {
        target: "https://jobportal-5kw8.onrender.com",
        // target: 'http://localhost:5500',
        changeOrigin: true,
        secure: false
      }
    },
  },
  plugins: [react()],
})