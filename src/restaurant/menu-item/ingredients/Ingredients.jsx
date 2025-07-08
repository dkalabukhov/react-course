import styles from './Ingredients.module.css';

const Ingredient = ({ children }) => {
  return <span className={styles.ingredients__ingredient}>{children}</span>;
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
