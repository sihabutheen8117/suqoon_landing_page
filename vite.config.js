import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/suqoon_landing_page/',
  plugins: [react()],
  server: {
    allowedHosts: ['.loca.lt', '.ngrok-free.dev']
  }
})