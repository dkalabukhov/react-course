import { useOutletContext } from 'react-router';

import { MenuList } from '../../components/restaurant/menu-list/MenuList';

export const RestaurantMenuPage = () => {
  const restaurant = useOutletContext();

  return (
    <>
      {restaurant.menu.length ? <MenuList dishesIds={restaurant.menu} /> : null}
    </>
  );
};
