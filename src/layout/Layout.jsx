import { Footer } from './footer/Footer';
import { Header } from './header/Header';

import styles from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <div className='container'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};
