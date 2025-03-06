import react from '@vitejs/plugin-react';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  build: {
    lib: command === 'build' && {
      entry: [resolve(__dirname, './src/index.ts')],
      formats: ['es', 'cjs'],
    },
    rollupOptions:
      command === 'serve'
        ? {
            input: {
              index: resolve(__dirname, './demo/index.html'),
            },
            external: Object.keys(peerDependencies),
          }
        : undefined,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'happy-dom',
    setupFiles: './__tests__/setup.ts',
    include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      reporter: ['text', 'lcovonly'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['/demo/', '**/dist/', '**/__tests__/'],
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    libInjectCss(),
  ],
}));
