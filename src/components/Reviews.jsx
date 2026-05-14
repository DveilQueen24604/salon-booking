export default function Reviews() {
  const reviews = [
    {
      name: 'แนน',
      text: 'บริการดีมาก ร้านสวยสุด ๆ 💖',
    },

    {
      name: 'มิน',
      text: 'ช่างทำผมน่ารัก งานละเอียดมาก',
    },

    {
      name: 'แพรว',
      text: 'ทำเล็บสวยมาก ประทับใจ ✨',
    },
  ];

  return (
    <div className="reviews">
      <h2>รีวิวจากลูกค้า</h2>

      <div className="review-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h3>{review.name}</h3>

            <p>⭐⭐⭐⭐⭐</p>

            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
