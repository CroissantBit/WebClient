/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				/* Text */
				bellflower: {
					50: '#eef2f7',
					100: '#dde6ee',
					200: '#baccde',
					300: '#98b2cd',
					400: '#7599bd',
					500: '#537fac',
					600: '#42668a',
					700: '#324c67',
					800: '#213345',
					900: '#111922',
					950: '#080d11'
				},
				/* Background */
				smore: {
					50: '#eef2f6',
					100: '#dde6ee',
					200: '#bbccdd',
					300: '#99b2cc',
					400: '#7799bb',
					500: '#557faa',
					600: '#446688',
					700: '#334c66',
					800: '#223344',
					900: '#111922',
					950: '#090d11'
				},
				/* Primary */
				lapis: {
					50: '#eae9fb',
					100: '#d4d4f7',
					200: '#a9a8f0',
					300: '#7f7de8',
					400: '#5452e0',
					500: '#2926d9',
					600: '#211fad',
					700: '#191782',
					800: '#100f57',
					900: '#08082b',
					950: '#040416'
				},
				/* Secondary */
				back: {
					50: '#f3eef6',
					100: '#e6ddee',
					200: '#cdbbdd',
					300: '#b499cc',
					400: '#9b77bb',
					500: '#8255aa',
					600: '#684488',
					700: '#4e3366',
					800: '#342244',
					900: '#1a1122',
					950: '#0d0911'
				},
				/* accent */
				lavender: {
					50: '#f3eef6',
					100: '#e6ddee',
					200: '#cdbbdd',
					300: '#b499cc',
					400: '#9b77bb',
					500: '#8255aa',
					600: '#684488',
					700: '#4e3366',
					800: '#342244',
					900: '#1a1122',
					950: '#0d0911'
				}
			}
		}
	},
	plugins: []
};
