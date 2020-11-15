import { ChakraProvider } from "@chakra-ui/react";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
