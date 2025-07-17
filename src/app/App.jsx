import { Layout } from '../layout/Layout';
import { RestaurantsPage } from '../pages/RestaurantsPage';

import '../destyle.css';
import '../globals.scss';

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage />
    </Layout>
  );
};
