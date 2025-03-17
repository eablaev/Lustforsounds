import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [react()],
    // base: mode === 'development' ? '/' : '/Lustforsounds/', // Use '/' locally, '/Lustforsounds/' for GitHub Pages
    base: '/', // Remove "/Lustforsounds/"
  }));
