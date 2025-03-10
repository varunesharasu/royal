// // import React, { useState } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import axios from 'axios';
// // import './BookingForm.css';

// // const BookingForm = () => {
// //   const { roomId } = useParams();
// //   const [startDate, setStartDate] = useState('');
// //   const [endDate, setEndDate] = useState('');
// //   const [adults, setAdults] = useState(1);
// //   const [children, setChildren] = useState(0);
// //   const [totalAmount, setTotalAmount] = useState(0);
// //   const [isPayEnabled, setIsPayEnabled] = useState(false);
// //   const navigate = useNavigate();

// //   const calculateAmount = () => {
// //     const start = new Date(startDate);
// //     const end = new Date(endDate);
// //     const nights = (end - start) / (1000 * 60 * 60 * 24);
// //     const pricePerNight = 2594; // You can fetch this from backend or pass it via props
// //     const amount = nights * pricePerNight;
// //     setTotalAmount(amount);
// //     setIsPayEnabled(true);
// //   };

// //   const handlePayNow = async () => {
// //     const token = localStorage.getItem('token');
// //     const bookingDetails = { roomId, startDate, endDate, adults, children, totalAmount };

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/book', bookingDetails, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       console.log(response.data);
// //       navigate('/confirmation');
// //     } catch (error) {
// //       console.error('Error saving booking:', error);
// //     }
// //   };

// //   return (
// //     <div className="booking-container">
// //       <div className="booking-card">
// //         <h2>Book Room {roomId}</h2>
// //         <div className="booking-inputs">
// //           <label>Start Date:</label>
// //           <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

// //           <label>End Date:</label>
// //           <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

// //           <label>Adults:</label>
// //           <input type="number" value={adults} min="1" onChange={(e) => setAdults(e.target.value)} />

// //           <label>Children:</label>
// //           <input type="number" value={children} min="0" onChange={(e) => setChildren(e.target.value)} />
// //         </div>

// //         <button className="calculate-btn" onClick={calculateAmount}>Calculate Amount</button>
// //         <p className="total-amount">Total Amount: ₹{totalAmount}</p>
// //         <button className={`pay-btn ${!isPayEnabled ? 'disabled' : ''}`} onClick={handlePayNow} disabled={!isPayEnabled}>Pay Now</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BookingForm;




// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import './BookingForm.css';

// const BookingForm = () => {
//   const { roomId } = useParams();
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [isPayEnabled, setIsPayEnabled] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(''); // To display error messages
//   const navigate = useNavigate();

//   const calculateAmount = () => {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     const nights = (end - start) / (1000 * 60 * 60 * 24);

//     if (nights <= 0) {
//       setErrorMessage('End date must be after start date.');
//       return;
//     }

//     const pricePerNight = 2594; // You can fetch this from backend or pass it via props
//     const amount = nights * pricePerNight;
//     setTotalAmount(amount);
//     setIsPayEnabled(true);
//     setErrorMessage(''); // Clear any previous error messages
//   };

//   const handlePayNow = async () => {
//     const token = localStorage.getItem('token');
//     const bookingDetails = { roomId, startDate, endDate, adults, children, totalAmount };

//     try {
//       const response = await axios.post('http://localhost:5000/api/book', bookingDetails, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       console.log(response.data);
//       navigate('/confirmation');
//     } catch (error) {
//       console.error('Error saving booking:', error);

//       if (error.response) {
//         // Handle specific error messages from the backend
//         setErrorMessage(error.response.data || 'An error occurred while booking the room.');
//       } else {
//         setErrorMessage('An unexpected error occurred.');
//       }
//     }
//   };

//   return (
//     <div className="booking-container">
//       <div className="booking-card">
//         <h2>Book Room {roomId}</h2>

//         {/* Error Message */}
//         {errorMessage && <p className="error-message">{errorMessage}</p>}

//         <div className="booking-inputs">
//           <label>Start Date:</label>
//           <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />

//           <label>End Date:</label>
//           <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />

//           <label>Adults:</label>
//           <input type="number" value={adults} min="1" onChange={(e) => setAdults(e.target.value)} required />

//           <label>Children:</label>
//           <input type="number" value={children} min="0" onChange={(e) => setChildren(e.target.value)} required />
//         </div>

//         <button className="calculate-btn" onClick={calculateAmount}>
//           Calculate Amount
//         </button>

//         <p className="total-amount">Total Amount: ₹{totalAmount}</p>

//         <button
//           className={`pay-btn ${!isPayEnabled ? 'disabled' : ''}`}
//           onClick={handlePayNow}
//           disabled={!isPayEnabled}
//         >
//           Pay Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;




// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { QRCodeCanvas } from 'qrcode.react'; // Import for QR code generation
// import './BookingForm.css';

// const BookingForm = () => {
//   const { roomId } = useParams();
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [isPayEnabled, setIsPayEnabled] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(''); // To display error messages
//   const [showQR, setShowQR] = useState(false); // To control QR code visibility
//   const navigate = useNavigate();

//   const calculateAmount = () => {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     const nights = (end - start) / (1000 * 60 * 60 * 24);

//     if (nights <= 0) {
//       setErrorMessage('End date must be after start date.');
//       return;
//     }

//     const pricePerNight = 2594; // You can fetch this from backend or pass it via props
//     const amount = nights * pricePerNight;
//     setTotalAmount(amount);
//     setIsPayEnabled(true);
//     setErrorMessage(''); // Clear any previous error messages
//   };

//   const handlePayNow = async () => {
//     const token = localStorage.getItem('token');
//     const bookingDetails = { roomId, startDate, endDate, adults, children, totalAmount };

//     try {
//       const response = await axios.post('http://localhost:5000/api/book', bookingDetails, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       console.log(response.data);
//       setShowQR(true); // Show QR code after successful booking
//     } catch (error) {
//       console.error('Error saving booking:', error);

//       if (error.response) {
//         // Handle specific error messages from the backend
//         setErrorMessage(error.response.data || 'An error occurred while booking the room.');
//       } else {
//         setErrorMessage('An unexpected error occurred.');
//       }
//     }
//   };

//   return (
//     <div className="booking-container">
//       <div className="booking-card">
//         <h2>Book Room {roomId}</h2>

//         {/* Error Message */}
//         {errorMessage && <p className="error-message">{errorMessage}</p>}

//         <div className="booking-inputs">
//           <label>Start Date:</label>
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             required
//           />

//           <label>End Date:</label>
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             required
//           />

//           <label>Adults:</label>
//           <input
//             type="number"
//             value={adults}
//             min="1"
//             onChange={(e) => setAdults(e.target.value)}
//             required
//           />

//           <label>Children:</label>
//           <input
//             type="number"
//             value={children}
//             min="0"
//             onChange={(e) => setChildren(e.target.value)}
//             required
//           />
//         </div>

//         <button className="calculate-btn" onClick={calculateAmount}>
//           Calculate Amount
//         </button>

//         <p className="total-amount">Total Amount: ₹{totalAmount}</p>

//         <button
//           className={`pay-btn ${!isPayEnabled ? 'disabled' : ''}`}
//           onClick={handlePayNow}
//           disabled={!isPayEnabled}
//         >
//           Pay Now
//         </button>

//         {/* QR Code Section */}
//         {showQR && (
//           <div className="qr-container">
//             <h3>Scan to Pay</h3>
//             <QRCodeCanvas
//               value={`upi://pay?pa=varunesht26@okicici&pn=Velavan%20Super%20Stores&am=${totalAmount}&cu=INR`}
//               size={200}
//             />
//             <p>UPI ID: varunesht26@okicici</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookingForm;

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './BookingForm.css';

const BookingForm = () => {
  const { roomId } = useParams();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [bookedIntervals, setBookedIntervals] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isPayEnabled, setIsPayEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const [adults, setAdults] = useState(1);
const [children, setChildren] = useState(0);


  // Fetch ACTIVE bookings for the room
  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/bookings/${roomId}`);
        const intervals = response.data.map(booking => ({
          start: new Date(booking.startDate),
          end: new Date(booking.endDate),
        }));
        setBookedIntervals(intervals);
      } catch (error) {
        console.error('Error fetching booked dates:', error);
      }
    };
    fetchBookedDates();
  }, [roomId]); // Re-run when roomId changes

  // Calculate total amount
  const calculateAmount = () => {
    if (!startDate || !endDate) {
      setErrorMessage('Please select valid dates.');
      return;
    }

    const nights = (endDate - startDate) / (1000 * 60 * 60 * 24);
    if (nights <= 0) {
      setErrorMessage('End date must be after start date.');
      return;
    }

    const pricePerNight = 2594;
    setTotalAmount(nights * pricePerNight);
    setIsPayEnabled(true);
    setErrorMessage('');
  };

  // Submit booking
  const handlePayNow = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/book', {
        roomId,
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
        adults,
        children,
        totalAmount,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate('/confirmation');
    } catch (error) {
      setErrorMessage(error.response?.data || 'An error occurred');
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-card">
        <h2>Book Room {roomId}</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        
        {/* Date Pickers */}
        <div className="booking-inputs">
          <label>Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            excludeDateIntervals={bookedIntervals}
            className="date-picker"
            placeholderText="Select start date"
            required
          />
          
          <label>End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            excludeDateIntervals={bookedIntervals}
            className="date-picker"
            placeholderText="Select end date"
            required
          />
          
          {/* Other input fields */}
          <label>Adults:</label>
          <input
            type="number"
            value={adults}
            min="1"
            onChange={(e) => setAdults(e.target.value)}
            required
          />
          <label>Children:</label>
          <input
            type="number"
            value={children}
            min="0"
            onChange={(e) => setChildren(e.target.value)}
            required
          />
        </div>

        <button className="calculate-btn" onClick={calculateAmount}>
          Calculate Amount
        </button>
        <p className="total-amount">Total Amount: ₹{totalAmount}</p>
        <button
          className={`pay-btn ${!isPayEnabled ? 'disabled' : ''}`}
          onClick={handlePayNow}
          disabled={!isPayEnabled}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default BookingForm;