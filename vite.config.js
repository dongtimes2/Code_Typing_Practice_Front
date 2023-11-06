/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/test/setupTests.js',
  },
});
