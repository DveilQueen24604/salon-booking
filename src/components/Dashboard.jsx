export default function Dashboard({ bookings }) {
  const totalBookings = bookings.length;

  const hairCount = bookings.filter((item) => item.service === 'ตัดผม').length;

  const nailCount = bookings.filter((item) => item.service === 'ทำเล็บ').length;

  const spaCount = bookings.filter((item) => item.service === 'สปาผม').length;

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h3>📋 คิวทั้งหมด</h3>
        <p>{totalBookings}</p>
      </div>

      <div className="dashboard-card">
        <h3>✂️ ตัดผม</h3>
        <p>{hairCount}</p>
      </div>

      <div className="dashboard-card">
        <h3>💅 ทำเล็บ</h3>
        <p>{nailCount}</p>
      </div>

      <div className="dashboard-card">
        <h3>💆 สปาผม</h3>
        <p>{spaCount}</p>
      </div>
    </div>
  );
}
