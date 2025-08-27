import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // Add this line
  plugins: [react()],
  server: {
    open: true,
    // Configure server to return index.html for unknown routes
    hmr: true,
  },
})
