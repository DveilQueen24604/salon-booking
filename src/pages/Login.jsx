import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const [password, setPassword] = useState('');

  const handleLogin = () => {

    const users =
      JSON.parse(
        localStorage.getItem('users')
      ) || [];
  
    const adminUser = {
      username: 'admin',
      password: '1234',
      role: 'admin',
    };
  
    // เช็ค admin
  
    if (
      username === adminUser.username &&
      password === adminUser.password
    ) {
  
      setIsLoggedIn(true);
  
      localStorage.setItem(
        'currentUser',
        JSON.stringify(adminUser)
      );
  
      navigate('/admin');
  
      return;
    }
  
    // เช็ค customer
  
    const foundUser = users.find(
      (user) =>
        user.email === username &&
        user.password === password
    );
  
    if (foundUser) {
  
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
        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="Email หรือ Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
