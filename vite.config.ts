import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    optimizeDeps: {
        include: ['gsap'],  // Ensure GSAP is optimized
    },
    ssr: {
        noExternal: ['gsap']  // Prevent GSAP from being treated as external during SSR
    }
});
