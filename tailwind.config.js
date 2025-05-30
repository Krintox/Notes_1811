/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  border: "hsl(0, 0%, 89.8%)", // for bg-border, text-border, etc.
		  primary: {
			50: "#faf5ff",
			100: "#f3e8ff",
			200: "#e9d5ff",
			300: "#d8b4fe",
			400: "#c084fc",
			500: "#a855f7",
			600: "#9333ea",
			700: "#7e22ce",
			800: "#6b21a8",
			900: "#581c87",
		  },
		},
		borderColor: {
		  DEFAULT: "hsl(0, 0%, 89.8%)", // for `border` shorthand
		  border: "hsl(0, 0%, 89.8%)", // for border-border
		},
		animation: {
		  "fade-in": "fadeIn 0.3s ease-in-out",
		  "slide-up": "slideUp 0.3s ease-out",
		},
		keyframes: {
		  fadeIn: {
			"0%": { opacity: "0" },
			"100%": { opacity: "1" },
		  },
		  slideUp: {
			"0%": { transform: "translateY(10px)", opacity: "0" },
			"100%": { transform: "translateY(0)", opacity: "1" },
		  },
		},
	  },
	},
	plugins: [],
  };
  