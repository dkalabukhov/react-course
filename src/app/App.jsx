import { UserContextProvider } from '../user-context/UserContextProvider';
import { ThemeContextProvider } from '../theme-context/ThemeContextProvider';
import { Layout } from '../layout/Layout';
import { RestaurantsPage } from '../pages/RestaurantsPage';

import '../destyle.css';
import '../globals.scss';

export const App = () => {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Layout>
          <RestaurantsPage />
        </Layout>
      </ThemeContextProvider>
    </UserContextProvider>
  );
};
