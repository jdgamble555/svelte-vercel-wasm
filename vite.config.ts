import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
//import cloudflareModules from '@cf-wasm/plugins/vite-cloudflare-modules';
import { sveltekitOG } from '@ethercorps/sveltekit-og/plugin';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		sveltekitOG()

		/*cloudflareModules({
			target: 'edge-light'
		}),*/
	]
});
