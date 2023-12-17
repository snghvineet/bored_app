import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					if (id.includes('node_modules')) {
						return id
							.toString()
							.split('node_modules/')[1]
							.split('/')[0]
							.toString();
					}
				},
			},
		},
	},
	plugins: [react(), svgr()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src/'),
			'@pages': path.resolve(__dirname, './src/pages/'),
			'@components': path.resolve(__dirname, './src/components/'),
			'@utils': path.resolve(__dirname, './src/utils/'),
			'@store': path.resolve(__dirname, './src/store/'),
			'@assets': path.resolve(__dirname, './src/assets/'),
		},
	},
});
