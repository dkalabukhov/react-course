import { useState } from 'react';
import styles from './ScrollProgress.module.css';
import { useEffect } from 'react';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const clientHeight = window.innerHeight;

      const docHeight = document.documentElement.scrollHeight;

      const maxScroll = docHeight - clientHeight;

      setScrollProgress((scrollTop / maxScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  });

  return (
    <div className={styles.scrollProgress}>
      <div
        className={styles.scrollProgress__bar}
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
