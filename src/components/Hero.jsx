export default function Hero({ setShowForm }) {
  return (
    <div className="hero">
      <h1>ร้านเสริมสวยครบวงจร</h1>

      <p>จองคิวออนไลน์ง่าย ๆ ได้ตลอด 24 ชั่วโมง</p>

      <img
        src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
        alt="Salon"
        className="hero-image"
      />

      <button className="book-btn" onClick={() => setShowForm(true)}>
        จองคิวตอนนี้
      </button>
    </div>
  );
}
