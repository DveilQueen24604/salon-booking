import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const navigate = useNavigate();

  const [name, setName] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const handleRegister = () => {

    if (
      !name ||
      !email ||
      !password
    ) {
      alert('กรอกข้อมูลให้ครบ');

      return;
    }

    const users =
      JSON.parse(
        localStorage.getItem('users')
      ) || [];

    const newUser = {
      name,
      email,
      password,
      role: 'customer',
    };

    users.push(newUser);

    localStorage.setItem(
      'users',
      JSON.stringify(users)
    );

    alert('สมัครสมาชิกสำเร็จ ✨');

    navigate('/login');
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <h2>สมัครสมาชิก</h2>

        <input
          type="text"
          placeholder="ชื่อ"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
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

        <button
          onClick={handleRegister}
        >
          สมัครสมาชิก
        </button>

      </div>

    </div>
  );
}