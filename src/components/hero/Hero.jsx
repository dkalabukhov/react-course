import { Link } from 'react-router';

import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__wrapper}>
        <h2 className={styles.hero__title}>Доставка еды из ресторанов на дом</h2>
        <p className={styles.hero__subtitle}>
          Заказывайте еду из наших ресторанов в любое время
        </p>
        <nav className={styles.hero__nav}>
          <Link to='/restaurants' className={styles.hero__button}>Перейти к ресторанам</Link>
        </nav>
      </div>
    </div>
  )
};
