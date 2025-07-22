import { AuthContextProvider } from '../auth-context/AuthContextProvider';
import { ThemeContextProvider } from '../theme-context/ThemeContextProvider';
import { Layout } from '../layout/Layout';
import { RestaurantsPage } from '../pages/RestaurantsPage';

import '../destyle.css';
import '../globals.scss';

export const App = () => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Layout>
          <RestaurantsPage />
        </Layout>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};
