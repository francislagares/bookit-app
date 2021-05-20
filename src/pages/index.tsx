import Home from '../components/Home';
import Layout from '../components/layout';

import { getRooms } from '../redux/actions/roomActions';

import { wrapper } from '../redux/store';

const Index = () => (
  <Layout>
    <Home />
  </Layout>
);

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ req, store }) => {
    await store.dispatch(getRooms(req));
  },
);

export default Index;
