import { ChakraProvider } from "@chakra-ui/react";
import defaultTheme from "../utils/theme";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

import "../Styles/masonry.css";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={defaultTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
