import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://netflix-api1-4syc.onrender.com', // Proxy /api to your backend
    },
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
