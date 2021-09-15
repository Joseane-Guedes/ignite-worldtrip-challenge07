import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { theme } from "../styles/theme";
import NextNProgress from 'nextjs-progressbar';


import '../styles/slider.scss';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
         <NextNProgress
       color="#29D"
       startPosition={0.3}
       stopDelayMs={200}
       height={3}
       showOnShallow={true}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
