import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ title, children, description, keywords }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />

      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: 'Sites web et collectes de fonds facile | My Events',
  description: 'Find the event you want easily in myEvents',
  keywords: 'Billets, Reunions Familiales, Retrouvailles, Marathons',
};
