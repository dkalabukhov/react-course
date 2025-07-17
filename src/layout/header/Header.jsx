import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__wrapper}>
          <h1 className={styles.header__heading}>AnyFood</h1>
        </div>
      </div>
    </header>
  );
};
