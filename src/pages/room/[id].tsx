import Layout from '../../components/layout';
import RoomDetails from '../../components/room/RoomDetails';

import { getRoomDetails } from '../../redux/actions/roomActions';

import { wrapper } from '../../redux/store';

const RoomDetailsPage = () => (
  <Layout>
    <RoomDetails title='Room Details' />
  </Layout>
);

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ req, params, store }) => {
    await store.dispatch(getRoomDetails(req, params?.id));
  },
);

export default RoomDetailsPage;
