/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				busywork: { DEFAULT: '#87F1FF', bg: '#5EF38C' },
			},
		},
	},
	plugins: [],
};
