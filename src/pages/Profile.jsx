export default function Profile() {

  const user =
    JSON.parse(
      localStorage.getItem(
        'currentUser'
      )
    );

  const bookings =
  
    JSON.parse(
      localStorage.getItem(
        'bookings'
      )
    ) || [];
    const userBookings =
  bookings.filter(
    (booking) =>
      booking.userEmail ===
      user?.email
  );

  return (

    <div className="profile-page">

      <h1>
        👩‍🦰 โปรไฟล์ลูกค้า
      </h1>

      <div className="profile-card">

        <h2>
          {user?.name}
        </h2>

        <p>
          📧 {user?.email}
        </p>

      </div>

      <h2 className="profile-title">
        ประวัติการจอง
      </h2>

      <div className="booking-list">

      {userBookings.map((booking, index) => (

          <div
            className="booking-card"
            key={index}
          >

            <h3>
              {booking.name}
            </h3>

            <p>
              📅 {booking.date}
            </p>

            <p>
              ⏰ {booking.time}
            </p>

            <p>
              💖 {booking.service}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}