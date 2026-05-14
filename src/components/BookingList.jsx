export default function BookingList({ bookings, setBookings }) {
  const handleDelete = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);

    setBookings(updatedBookings);
  };

  return (
    <div className="booking-list">
      <h2>รายการจองคิว</h2>

      {bookings.length === 0 ? (
        <p>ยังไม่มีรายการจอง</p>
      ) : (
        bookings.map((item, index) => (
          <div className="booking-card" key={index}>
            <h3>{item.name}</h3>

            <p>📅 {item.date}</p>

            <p>⏰ {item.time}</p>

            <p>💖 {item.service}</p>

            <button className="delete-btn" onClick={() => handleDelete(index)}>
              ลบรายการ
            </button>
          </div>
        ))
      )}
    </div>
  );
}
