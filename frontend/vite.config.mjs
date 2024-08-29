import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        // Prevents Vite from trying to auto-optimize dependencies that might cause conflicts
        noDiscovery: true,
        include: ['@popperjs/core'], // Ensures Popper.js is included in the optimized dependencies
    },
    plugins: [
        vue(),
        Components({
            resolvers: [PrimeVueResolver()] // Auto-imports PrimeVue components
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)) // Simplifies path aliases in your project
        }
    },
    build: {
        rollupOptions: {
            external: ['@popperjs/core'], // Treats Popper.js as an external dependency to avoid resolution issues
        },
    },
});
