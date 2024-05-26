import Head from 'next/head';
import './globals.css';

export const metadata = {
  title: "The Professional Photographer",
  description: "The Professional Photographer",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap"
        />
        <link rel="icon" href="./logo.png" />
      </Head>
      <body className="font-PoetsenOne">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
