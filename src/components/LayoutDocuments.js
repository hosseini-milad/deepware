import Header from './Header';
import Footer from './Footer';

function LayoutDocuments({ children, lang }) {
  return (
    <>
      <Header lang={lang} />
      {children}
      <Footer class="footer py-2 w-100 footerFix bg-white" />
    </>
  );
}
export default LayoutDocuments;
