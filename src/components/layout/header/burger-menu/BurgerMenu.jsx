import { useState } from "react";
import { Menu } from "lucide-react";

import { ThemeSwitcher } from "../theme-switcher/ThemeSwitcher";
import { Sheet } from "../../../sheet/Sheet";
import { useTheme } from "../../../theme-context/use-theme";
import { UserAuth } from "../user-auth/UserAuth";

import styles from './BurgerMenu.module.scss';

export const BurgerMenu = () => {
  const { theme } = useTheme();
  const [isMenuActive, setIsMenuActive] = useState(false);

  const hideMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <>
      <button className={styles.sheetTrigger} onClick={() => setIsMenuActive(true)}>
        <Menu />
      </button>
      <Sheet themeMode={theme} active={isMenuActive} hideSheet={hideMenu}>
        <ThemeSwitcher />
        <UserAuth />
      </Sheet>
    </>
  )
};
