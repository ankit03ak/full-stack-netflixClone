import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:8800', // Proxy /api to your backend
    },
  },
});
