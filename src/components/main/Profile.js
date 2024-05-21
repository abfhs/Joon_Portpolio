import React from 'react';

const Profile = () => {
  return (
    <div className="profile">
      <img src="profile.jpg" alt="Profile" className="profile-pic" />
      <div className="profile-info">
        <h2>000</h2>
        <p>안녕하세요! 개발자 강준영입니다.</p>
        <div className="profile-details">
          <div className="profile-item">
            <strong>나이:</strong> 30
          </div>
          <div className="profile-item">
            <strong>학력:</strong> ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
          </div>
          <div className="profile-item">
            <strong>자격증:</strong> ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
