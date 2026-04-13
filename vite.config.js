import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Suqoon.net/',
  server: {
    allowedHosts: ['.loca.lt', '.ngrok-free.dev']
  }
})