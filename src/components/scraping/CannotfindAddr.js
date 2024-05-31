// EmptyResultComponent.js
import React from 'react';

function CannotfindAddr() {

  const handleBackClick = () => {
     // 로컬 스토리지 초기화
    localStorage.clear();
    
    // isAuthenticated 값 복원
    localStorage.setItem('isAuthenticated', 'true');

    window.location.reload();
  };

  return (
    <div className="empty-result">
      <h3>없는 주소입니다.</h3>
      <h3> 주소를 확인해서 다시 검색해주세요.</h3>
      <button onClick={handleBackClick}>다시 검색하기</button>
    </div>
  );
}

export default CannotfindAddr;
