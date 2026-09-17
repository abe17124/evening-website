import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    // Allow Cloudflare quick tunnels (*.trycloudflare.com) to hit vite preview
    allowedHosts: true,
  },
})
