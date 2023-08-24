/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,tsx}'],
	theme: {
		extend: {
			gridTemplateRows: {
				'10': 'repeat(10, minmax(0, 1fr))',
				'12': 'repeat(12, minmax(0, 1fr))',
			},
			gridRow: {
				'span-7': 'span 7 / span 7',
			},
			maxWidth: {
				'max-wid': 'calc(var(--vh, 100vh) * 0.6)',
			},
			colors: {
				'nomad-green': '#20633F',
				'nomad-sand': '#FFFAF2',
				'meeting-disable': '#818181',
			},
			boxShadow: {
				'full': '0 0 3px 0 #d4d4d8'
			}
		},
		fontFamily: {
			nexonBold: ['nexonBold'],
			nexonLight: ['nexonLight'],
			fugazRegular: ['fugazRegular'],
		},
	},
	plugins: [],
};
