import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/paradiso-elba-website/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
