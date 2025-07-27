import { MenuItemContainer } from '../menu-item/MenuItemContainer';

import styles from './MenuList.module.scss';

export const MenuList = ({ dishesIds }) => {
  return (
    <ul className={styles.menu}>
      {dishesIds.map((dishId) => (
        <MenuItemContainer key={dishId} dishId={dishId} />
      ))}
    </ul>
  );
};
