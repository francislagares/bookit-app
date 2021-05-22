import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTypedSelector } from '../hooks/useTypedSelector';
import RoomItem from './room/RoomItem';
import { IRoom } from 'src/interfaces';

const Home = () => {
  const { rooms, error } = useTypedSelector(state => state.allRooms);

  useEffect(() => {
    toast.error(error);
  }, [error]);

  return (
    <section id='rooms' className='container mt-5'>
      <h2 className='mb-3 ml-2 stays-heading'>Stays in New York</h2>

      <a href='#' className='ml-2 back-to-search'>
        <i className='fa fa-arrow-left' /> Back to Search
      </a>
      <div className='row'>
        {rooms && rooms.length === 0 ? (
          <div className='alert alert-danger'>
            <b>No Rooms.</b>
          </div>
        ) : (
          rooms.map((room: IRoom) => <RoomItem key={room._id} room={room} />)
        )}
      </div>
    </section>
  );
};

export default Home;
