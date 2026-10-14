import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 'mpa' disables the SPA fallback, so unknown paths return a real 404 (public/404.html) instead of the home page.
export default defineConfig({ plugins: [react()], appType: 'mpa' })
