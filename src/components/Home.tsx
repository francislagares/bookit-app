import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Pagination from 'react-js-pagination';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { clearErrors } from '../redux/actions/roomActions';
import RoomItem from './room/RoomItem';
import { IRoom } from 'src/interfaces';

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { rooms, resPerPage, roomsCount, filteredRoomsCount, error } =
    useTypedSelector(state => state.allRooms);

  let { location, page = 1 } = router.query;
  page = Number(page);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [error, dispatch]);

  const handlePagination = (pageNumber: number) => {
    window.location.href = `/?page=${pageNumber}`;
  };

  let count = roomsCount;
  if (location) {
    count = filteredRoomsCount;
  }

  return (
    <>
      <section id='rooms' className='container mt-5'>
        <h2 className='mb-3 ml-2 stays-heading'>
          {location ? `Rooms in ${location}` : 'All Rooms'}
        </h2>

        <Link href='/search'>
          <a className='ml-2 back-to-search'>
            <i className='fa fa-arrow-left' /> Back to Search
          </a>
        </Link>
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

      {resPerPage < count && (
        <div className='d-flex justify-content-center mt-5'>
          <Pagination
            activePage={page}
            itemsCountPerPage={resPerPage}
            totalItemsCount={roomsCount}
            onChange={handlePagination}
            nextPageText='Next'
            prevPageText='Prev'
            firstPageText='First'
            lastPageText='Last'
            itemClass='page-item'
            linkClass='page-link'
          />
        </div>
      )}
    </>
  );
};

export default Home;
