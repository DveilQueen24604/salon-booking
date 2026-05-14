import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">✨ Beauty Salon</h2>

      <div className="nav-links">
        <Link to="/">หน้าแรก</Link>

        <Link to="/booking">รายการจอง</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
