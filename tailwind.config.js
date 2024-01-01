/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				sidebar: '5px 5px 10px rgba(20,20,20, 0.3)',
			},
			colors: {
				busywork: { DEFAULT: '#87F1FF', bg: '#5EF38C' },
			},
		},
	},
	plugins: [],
};
