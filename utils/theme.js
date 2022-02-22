import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
	sm: "425px",
	md: "768px",
	lg: "1024px",
	xl: "1440px",
	"2xl": "2560px",
});

const defaultTheme = extendTheme({
	fontSizes: {
		xxxl: "10rem",
		xxl: "7.5rem",
		xl: "5rem",
		l: "3rem",
		m: "2rem",
		s: "1rem",
	},
	colors: {
		primaryPink: {
			default: "#FE8189",
			50: "#FFFFFF",
			100: "#FFFAFA",
			200: "#FFFAFB",
			300: "#FFD2D5",
			400: "#FEA9AF",
			500: "#FE8189",
			600: "#FE4955",
			700: "#FD1221",
			800: "#D5020F",
			900: "#9D010B",
		},
		dark: {
			default: "#555050",
			50: "#B1ACAC",
			100: "#A7A1A1",
			200: "#938C8C",
			300: "#7F7878",
			400: "#6A6464",
			500: "#555050",
			600: "#383535",
			700: "#1B1A1A",
			800: "#000000",
			900: "#000000",
		},
	},
	fonts: {
		main: "'Poppins', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
		heading: "'Merriweather', serif",
	},
	styles: {
		global: {
			html: {
				fontSize: "10px",
			},
			body: {
				fontSize: "xxl",
				fontWeight: "400",
				padding: "5rem 14rem",
			},
			"html, body": {
				fontFamily: "main",
				bg: "primaryPink.100",
				color: "dark.500",
			},
		},
	},
});

export default defaultTheme;
