import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
      </Head>

      <Nav />
      {children}
      <Footer />
    </div>
  );
}
