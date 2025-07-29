import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';

import { AuthContextProvider } from '../auth-context/AuthContextProvider';
import { ThemeContextProvider } from '../theme-context/ThemeContextProvider';
import { store } from '../../redux/store';
import { MainLayout } from '../../layouts/main-layout/MainLayout';
import { HomePage } from '../../pages/home-page/HomePage';
import { NotFoundPage } from '../../pages/not-found-page/NotFoundPage';
import { RestaurantsPage } from '../../pages/restaurants-page/RestaurantsPage';
import { RestaurantPage } from '../../pages/restaurant-page/RestaurantPage';

import '../../destyle.css';
import '../../globals.scss';
import { RestaurantMenuPage } from '../../pages/restaurant-menu-page/RestaurantMenuPage';
import { RestaurantReviewsPage } from '../../pages/restaurant-reviews-page/RestaurantReviewsPage';
import { DishPage } from '../../pages/dish-page/DishPage';

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='restaurants' element={<RestaurantsPage />}>
                  <Route path=':restaurantId' element={<RestaurantPage />}>
                    <Route path='menu' element={<RestaurantMenuPage />} />
                    <Route path='reviews' element={<RestaurantReviewsPage />} />
                  </Route>
                </Route>
                <Route path='dish/:dishId' element={<DishPage />} />
                <Route path='*' element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
