import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://netflix-api1-4syc.onrender.com', // Proxy /api to your backend
    },
  },
});
