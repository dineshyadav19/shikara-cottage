import Header from '@components/Header';
import Footer from '@components/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div id="content">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
