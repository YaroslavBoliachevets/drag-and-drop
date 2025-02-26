import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],

// });

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'ws', // WebSocket для HMR
      host: 'localhost',
    },
    watch: {
      usePolling: true, // Если HMR не работает, иногда нужно для Windows
    },
  },
  // cacheDir: false,
});
