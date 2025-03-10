import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUsername, setUpdatedUsername] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.get('http://localhost:5000/api/user', {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Filter ACTIVE bookings
        const activeBookings = response.data.bookings.filter(b => b.status === 'active');
        setUserData(response.data.user);
        setBookings(activeBookings);
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleCancelBooking = async (bookingId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/bookings/${bookingId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Refetch data to update UI
      const response = await axios.get('http://localhost:5000/api/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(response.data.user);
      setBookings(response.data.bookings.filter(b => b.status === 'active'));
      alert('Booking canceled successfully');
    } catch (error) {
      console.error('Error canceling booking:', error);
      alert('Failed to cancel booking');
    }
  };

  const handleUpdateUserDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        'http://localhost:5000/api/user/update',
        {
          username: updatedUsername || userData.username,
          email: updatedEmail || userData.email,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Refetch updated user data
      const response = await axios.get('http://localhost:5000/api/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(response.data.user);
      setIsEditing(false);
      alert('User details updated successfully');
    } catch (error) {
      console.error('Error updating user details:', error);
      alert('Failed to update user details');
    }
  };

  if (!userData) return <p className="loading-text">Loading...</p>;

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">User Dashboard</h2>

      {/* User Details Section */}
      <div className="user-card">
        <h3>User Details</h3>
        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit Details</button>
      </div>

      {/* Bookings Section */}
      <h3 className="section-title">Your Active Bookings</h3>
      {bookings.length === 0 ? (
        <p className="no-bookings">No active bookings found.</p>
      ) : (
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Room ID</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Adults</th>
              <th>Children</th>
              <th>Total Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.roomId}</td>
                <td>{new Date(booking.startDate).toLocaleDateString()}</td>
                <td>{new Date(booking.endDate).toLocaleDateString()}</td>
                <td>{booking.adults}</td>
                <td>{booking.children}</td>
                <td>₹{booking.totalAmount}</td>
                <td>
                  <button 
                    className="cancel-btn" 
                    onClick={() => handleCancelBooking(booking._id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Edit Modal */}
      {isEditing && (
        <div className="modal-overlay" onClick={() => setIsEditing(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Edit User Details</h3>
            <input
              type="text"
              placeholder="Username"
              value={updatedUsername}
              onChange={(e) => setUpdatedUsername(e.target.value)}
              className="modal-input"
            />
            <input
              type="email"
              placeholder="Email"
              value={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
              className="modal-input"
            />
            <button className="save-btn" onClick={handleUpdateUserDetails}>Save Changes</button>
            <button className="close-btn" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;