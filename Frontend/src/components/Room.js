import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Room.css';

const rooms = [
  {
    id: 1,
    name: 'Couple Room AC',
    price: '₹ 2,594',
    description: '(110 sq.ft (10 sq.mt) | Double Bed)',
    image: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/202304162346035007-13432-81a16730e32711eda8160a58a9feac02.jpg?downsize=*:500&crop=990:500',
    details: 'This deluxe room offers a stunning sea view, king-sized bed, and a private balcony. Perfect for couples or solo travelers looking for luxury.'
  },
  {
    id: 2,
    name: '4 Member Room AC',
    price: '₹ 3,890',
    description: '(160 sq.ft (15 sq.mt) | Double Bed)',
    image: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/202304162346035007-6981494-900f2aa4e0bc11ed99480a58a9feac02.jpg?downsize=*:500&crop=990:500',
    details: 'This standard room comes with a queen-sized bed, garden view, and basic amenities. Ideal for budget travelers.'
  },
  {
    id: 3,
    name: '6 Members Room AC',
    price: '₹ 6,508',
    description: '(220 sq.ft (20 sq.mt) | King Bed)',
    image: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/202304162346035007-6981484-024d20a4e32811eda8160a58a9feac02.jpg?downsize=*:500&crop=990:500',
    details: 'This family suite includes two bedrooms, a living area, and a kitchenette. Perfect for families or groups of friends.'
  },
  {
    id: 4,
    name: 'Hut NON AC',
    price: '₹ 17,862',
    description: '(680 sq.ft (63 sq.mt) | Queen Bed)',
    image: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/202304162346035007-3712-7c6d8866e03911ed95310a58a9feac02.jpg?downsize=*:500&crop=990:500',
    details: 'The executive suite features a large bedroom, private balcony, and premium amenities. Ideal for business travelers or those seeking luxury.'
  },
  {
    id: 5,
    name: 'Private Villa',
    price: '₹ 24,184',
    description: '(2600 sq.ft (242 sq.mt) | Futon)',
    image: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/202304162346035007-15182-f2e76d04dff311ed8a570a58a9feac02.jpg?downsize=*:500&crop=990:500',
    details: 'This private villa is perfect for those who seek comfort, space, and luxury. Comes with a pool and a private garden.'
  },
  {
    id: 6,
    name: 'Indoor Theatre Hall AC',
    price: '₹ 26,893',
    description: '(900 sq.ft (84 sq.mt) | King Bed)',
    image: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/202304162346035007-6981440-f095a7fae03411edbaad0a58a9feac02.jpg?downsize=*:500&crop=990:500',
    details: 'A luxurious indoor theatre hall with a massive screen, premium sound system, and elegant seating.'
  },
];

const Room = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const openModal = (room) => {
    setSelectedRoom(room);
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  return (
    <div className="room-container">
      {rooms.map((room) => (
        <div key={room.id} className="room-card">
          <div className="room-image-wrapper">
            <img src={room.image} alt={room.name} className="room-image" />
          </div>
          <h3>{room.name}</h3>
          <p>{room.description}</p>
          <p><strong>{room.price}/night</strong></p>
          <div className="room-buttons">
            <button className="view-more-btn" onClick={() => openModal(room)}>View More</button>
            <Link to={`/book/${room.id}`}>
              <button className="book-btn">Book Room</button>
            </Link>
          </div>
        </div>
      ))}

      {selectedRoom && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedRoom.name}</h2>
            <img src={selectedRoom.image} alt={selectedRoom.name} className="modal-image" />
            <p>{selectedRoom.details}</p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Room;
