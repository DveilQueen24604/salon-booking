import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar({
  isLoggedIn,
  setIsLoggedIn,
}) {

  const navigate = useNavigate();

  const handleLogout = () => {

    setIsLoggedIn(false);

    localStorage.removeItem(
      'currentUser'
    );

    navigate('/login');
  };

  return (

    <nav className="navbar">

      <h2 className="logo">
        ✨ Beauty Salon
      </h2>

      <div className="nav-links">

        <Link to="/">
          หน้าแรก
        </Link>

        <Link to="/booking">
          รายการจอง
        </Link>

        {isLoggedIn && (
    <Link to="/profile">
      โปรไฟล์
    </Link>
  )}
   {!isLoggedIn ? (

<Link to="/register">
  สมัครสมาชิก
</Link>

) : null}

        {isLoggedIn ? (

          <button
            className="nav-logout"
            onClick={handleLogout}
          >
            Logout
          </button>

        ) : (

          <Link to="/login">
            Login
          </Link>

        )}

      </div>

    </nav>
  );
}