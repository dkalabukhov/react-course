import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__wrapper}>
          <p className={styles.footer__copyright}>AnyFood 2025 &copy;</p>
        </div>
      </div>
    </footer>
  );
};
