import { ApolloProvider } from "@apollo/client";
import withData from "../src/utils/withData";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <ChakraProvider>
        <div>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ChakraProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
