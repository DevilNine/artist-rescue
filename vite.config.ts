import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron/simple'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // @ts-expect-error vite-plugin-electron/simple has no default call signature in nodenext
    electron({
      main: {
        entry: 'electron/main.ts',
      },
      preload: {
        input: 'electron/preload.ts',
      },
      renderer: {},
    }),
  ],
  build: {
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: { 
        drop_console: true, 
        drop_debugger: true, 
        passes: 2,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      },
      mangle: { 
        toplevel: true, 
        properties: { regex: /^_private/ }
      },
      format: { 
        comments: false 
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'i18n-vendor': ['i18next', 'react-i18next'],
          'icons-vendor': ['lucide-react']
        }
      }
    }
  }
})
