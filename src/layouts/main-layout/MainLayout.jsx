import cn from 'classnames';

import { ScrollProgress } from '../../components/scroll-progress/ScrollProgress';
import { useTheme } from '../../components/theme-context/use-theme';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';

import styles from './MainLayout.module.scss';
import { Outlet } from 'react-router';

export const MainLayout = () => {
  const { theme } = useTheme();

  return (
    <>
      <ScrollProgress />
      <div className={styles.page}>
        <Header />
        <main className={cn(styles.page__main, { [styles.page__main_dark]: theme === 'dark' })}>
          <div className='container'>
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
