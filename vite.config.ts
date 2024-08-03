import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    rollupOptions: {
      external: ['scrypt-ts','neucron-signer','@bsv/sdk'], // Add this if you want to externalize scrypt-ts
    }
  }
});
