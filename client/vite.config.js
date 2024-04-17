import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  server : {
    proxy : {
      '/api': {
        target: "https://portfolio-maker-55g9.onrender.com",
        secure: false,
      },
    }
  },
  plugins: [react()],
})
