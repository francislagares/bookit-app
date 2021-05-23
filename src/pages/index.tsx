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
  async ({ req, query, store }) => {
    await store.dispatch(
      getRooms(
        req,
        Number(query.page),
        query.location,
        query.guests,
        query.category,
      ),
    );
  },
);

export default Index;
