import React from 'react';
import { IRoom } from 'src/interfaces';

interface IRoomFeatures {
  room: IRoom;
}

const RoomFeatures = ({ room }: IRoomFeatures) => (
  <div className='features mt-5'>
    <h3 className='mb-4'>Features:</h3>
    <div className='room-feature'>
      <i className='fa fa-cog fa-fw fa-users' aria-hidden='true' />
      <p>{room.guestCapacity} Guests</p>
    </div>

    <div className='room-feature'>
      <i className='fa fa-cog fa-fw fa-bed' aria-hidden='true' />
      <p>{room.numOfBeds} Beds</p>
    </div>

    <div className='room-feature'>
      <i
        className={
          room.breakfast
            ? 'fa fa-check text-success'
            : 'fa fa-times text-danger'
        }
        aria-hidden='true'
      />
      <p>Breakfast</p>
    </div>

    <div className='room-feature'>
      <i
        className={
          room.internet ? 'fa fa-check text-success' : 'fa fa-times text-danger'
        }
        aria-hidden='true'
      />
      <p>Internet</p>
    </div>

    <div className='room-feature'>
      <i
        className={
          room.airConditioned
            ? 'fa fa-check text-success'
            : 'fa fa-times text-danger'
        }
        aria-hidden='true'
      />
      <p>Air Conditioned</p>
    </div>

    <div className='room-feature'>
      <i
        className={
          room.petsAllowed
            ? 'fa fa-check text-success'
            : 'fa fa-times text-danger'
        }
        aria-hidden='true'
      />
      <p>Pets Allowed</p>
    </div>

    <div className='room-feature'>
      <i
        className={
          room.roomCleaning
            ? 'fa fa-check text-success'
            : 'fa fa-times text-danger'
        }
        aria-hidden='true'
      />
      <p>Room Cleaning</p>
    </div>
  </div>
);

export default RoomFeatures;
