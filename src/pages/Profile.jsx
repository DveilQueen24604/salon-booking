export default function Profile() {

    const user =
      JSON.parse(
        localStorage.getItem('currentUser')
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
  
      </div>
    );
  }