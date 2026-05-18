import { useState } from 'react';

export default function Popup({
  setShowForm,
  bookings,
  setBookings,
  setSuccessMessage,
}) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [service, setService] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = () => {
    if (!name || !date || !time || !service) {
      alert('กรุณากรอกข้อมูลให้ครบ');
      return;
    }

    const currentUser =
  JSON.parse(
    localStorage.getItem(
      'currentUser'
    )
  );

const newBooking = {

  name,
  phone,
  date,
  time,
  service,

  userEmail:
    currentUser?.email || '',

};

    setBookings([...bookings, newBooking]);

    setShowForm(false);
    setSuccessMessage('จองคิวสำเร็จ 💖');

    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);

    setName('');
    setDate('');
    setService('');
  };

  return (
    <div className="overlay">
      <div className="popup">
        <h2>จองคิว</h2>

        <input
          type="text"
          placeholder="ชื่อ"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">เลือกบริการ</option>

          <option>ตัดผม</option>
          <option>ทำเล็บ</option>
          <option>สปาผม</option>
        </select>

        <button className="confirm-btn" onClick={handleBooking}>
          ยืนยันการจอง
        </button>

        <button className="close-btn" onClick={() => setShowForm(false)}>
          ปิด
        </button>
      </div>
    </div>
  );
}
