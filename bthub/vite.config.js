import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const isGH = process.env.DEPLOY_TARGET === 'GH';

// https://vite.dev/config/
export default defineConfig({
  base: isGH ? '/btengineering/' : '/',
  plugins: [react(), tailwindcss()],
})
