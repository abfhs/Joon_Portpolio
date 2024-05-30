// EmptyResultComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function CannotfindAddr() {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
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
