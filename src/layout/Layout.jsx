import cn from 'classnames';

import { ScrollProgress } from '../scroll-progress/ScrollProgress';
import { useTheme } from '../theme-context/use-theme';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';

import styles from './Layout.module.scss';

export const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <>
      <ScrollProgress />
      <div className={styles.page}>
        <Header />
        <main className={cn(styles.page__main, { [styles.page__main_dark]: theme === 'dark' })}>
          <div className='container'>{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};
