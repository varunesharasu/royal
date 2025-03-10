import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token'); 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/rooms" className="nav-link">Rooms</Link>
      <Link to="/about" className="nav-link">About</Link> {/* Added About Page */}
      {isLoggedIn && <Link to="/dashboard" className="nav-link">Dashboard</Link>}
      {!isLoggedIn && <Link to="/login" className="nav-link">Login</Link>}
      {!isLoggedIn && <Link to="/register" className="nav-link">Register</Link>}
      {isLoggedIn && <button className="logout-btn" onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import './Navbar.css';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [userData, setUserData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isScrolled, setIsScrolled] = useState(false);


//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         try {
//           const response = await axios.get('http://localhost:5000/api/user', {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           setUserData(response.data.user);
//         } catch (error) {
//           console.error('Error fetching user data:', error);
//           setUserData(null);
//         }
//       } else {
//         setUserData(null);
//       }
//       setIsLoading(false);
//     };

//     fetchUserData();
//   }, [location]); // Re-run on route changes

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setUserData(null);
//     navigate('/login');
//   };

//   if (isLoading) return <nav className="navbar">Loading...</nav>;

//   return (
//     <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
//       <Link to="/" className="nav-link">Home</Link>
//       <Link to="/rooms" className="nav-link">Rooms</Link>
//       <Link to="/about" className="nav-link">About</Link>
      
//       {userData ? (
//         <div className="user-section">
//           <Link to="/dashboard" className="nav-link">Dashboard</Link>
//           <div className="user-details">
//             <span>Logged in as: {userData.username}</span>
//             <button className="logout-btn" onClick={handleLogout}>Logout</button>
//           </div>
//         </div>
//       ) : (
//         <div className="auth-links">
//           <Link to="/login" className="nav-link">Login</Link>
//           <Link to="/register" className="nav-link">Register</Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;