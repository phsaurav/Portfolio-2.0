import createCache from "@emotion/cache";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const cache = createCache({
	key: "css",
	prepend: true,
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		// <CacheProvider value={cache}>
		// 	<Component {...pageProps} />
		// </CacheProvider>
		<div>
			<h1>Working</h1>
		</div>
	);
}

export default MyApp;
