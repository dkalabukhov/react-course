import { Provider } from 'react-redux';

import { AuthContextProvider } from '../auth-context/AuthContextProvider';
import { ThemeContextProvider } from '../theme-context/ThemeContextProvider';
import { Layout } from '../layout/Layout';
import { store } from '../../redux/store';
import { RestaurantsPageContainer } from '../../pages/RestaurantsPageContainer';

import '../../destyle.css';
import '../../globals.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantsPageContainer />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
