import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login({
  setIsLoggedIn,
}) {

  const [username, setUsername] =
    useState('');

  const [password, setPassword] =
    useState('');

  const navigate = useNavigate();

  const handleLogin = () => {

    // ADMIN

    if (
      username === 'admin' &&
      password === '1234'
    ) {

      setIsLoggedIn(true);

      localStorage.setItem(
        'currentUser',
        JSON.stringify({
          username: 'admin',
          role: 'admin',
        })
      );

      navigate('/admin');

      return;
    }

    // CUSTOMER

    const users =
      JSON.parse(
        localStorage.getItem('users')
      ) || [];

    const foundUser =
      users.find(
        (user) =>
          user.email === username &&
          user.password === password
      );

    if (foundUser) {
      setIsLoggedIn(true);

      localStorage.setItem(
        'currentUser',
        JSON.stringify(foundUser)
      );

      navigate('/profile');

    } else {

      alert(
        'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'
      );

    }
  };

  return (

    <div className="login-page">

      <div className="login-box">

        <h2>Login</h2>

        <input
          type="text"
          placeholder="Email หรือ Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
}