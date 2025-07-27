import cn from 'classnames';

import { useTheme } from '../../../theme-context/use-theme';

import styles from './Ingredients.module.scss';

const Ingredient = ({ children }) => {
  const { theme } = useTheme();
  return (
    <span
      className={cn(styles.ingredients__ingredient, {
        [styles.ingredients__ingredient_dark]: theme === 'dark',
      })}
    >
      {children}
    </span>
  );
};

export const Ingredients = ({ ingredients }) => {
  return (
    <div className={styles.ingredients}>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient}>{ingredient}</Ingredient>
      ))}
    </div>
  );
};
