import { MenuItem } from '../menu-item/MenuItem';

import styles from './MenuList.module.scss';

export const MenuList = ({ menu }) => {
  return (
    <ul className={styles.menu}>
      {menu.map((menuItem) => (
        <MenuItem key={menuItem.id} menuItem={menuItem} />
      ))}
    </ul>
  );
};
