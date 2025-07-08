import { MenuItem } from '../menu-item/MenuItem';

import styles from './MenuList.module.css';

export const MenuList = ({ menu }) => {
  return (
    <ul className={styles.menu}>
      {menu.map((menuItem) => (
        <MenuItem key={menuItem.id} menuItem={menuItem} />
      ))}
    </ul>
  );
};
