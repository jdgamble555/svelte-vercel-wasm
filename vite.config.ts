import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import cloudflareModules from '@cf-wasm/plugins/vite-cloudflare-modules';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		cloudflareModules({
			target: 'edge-light'
		}),
	]
});
