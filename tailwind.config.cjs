/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					dark: '#0098fd',
					DEFAULT: '#0098fd',
					light: '#66c1fd',
				},
				secondary: {
					dark: '#8000ff',
					DEFAULT: '#8000ff',
					light: '#8000ff',
				},
				accent: {
					dark: '#9f7aea',
					DEFAULT: '#b794f4',
					light: '#c3b1f6',
				},
				background: {
					dark: '#171923',
					DEFAULT: '#1a202c',
					light: '#2d3748',
				},
			},
			backgroundImage: {
				'hero-pattern': "url('/wallpapers/blob-scene-haikei.svg')",
			}
		},
	},
	plugins: [],
}
