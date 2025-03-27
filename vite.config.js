import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  optimizeDeps: {
    include: ['framer-motion','react-icons'], // Ensure framer-motion is pre-bundled
  },
});
