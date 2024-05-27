import React from 'react';
import '../../styles/Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src="/profile_fake.png" alt="Profile" />
      </div>
      <div className="profile-details">
        <h2>John Doe</h2>
        <p><strong>Age:</strong> 30</p>
        <p><strong>Education:</strong> Bachelor's Degree in Computer Science</p>
        <p><strong>Experience:</strong> 5 years in Web Development</p>
        <p><strong>Certifications:</strong> AWS Certified Solutions Architect</p>
      </div>
    </div>
  );
};

export default Profile;