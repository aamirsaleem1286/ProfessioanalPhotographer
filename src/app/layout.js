import Head from 'next/head';
import './globals.css'; 

export const metadata = {
  title: "The photographer",
  description: "The Professional PhotoGrapher",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap"
        /> */}
      </Head>
      <body className="font-PoetsenOne">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
