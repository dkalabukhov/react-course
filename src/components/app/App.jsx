import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';

import { AuthContextProvider } from '../auth-context/AuthContextProvider';
import { ThemeContextProvider } from '../theme-context/ThemeContextProvider';
import { store } from '../../redux/store';
import { RestaurantsPageContainer } from '../../pages/restaurants-page/RestaurantsPageContainer';
import { MainLayout } from '../../layouts/main-layout/MainLayout';
import { HomePage } from '../../pages/home-page/HomePage';
import { NotFoundPage } from '../../pages/not-found-page/NotFoundPage';

import '../../destyle.css';
import '../../globals.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='restaurants' element={<RestaurantsPageContainer />} />
                <Route path='*' element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
