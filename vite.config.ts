/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.VITE_ELECTRON == 'true' ? './' : '/',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: './build',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/test/setupTests.ts',
  },
});
