import React from 'react';

function CannotfindDoc() {

  const handleBackClick = () => {
    // 로컬 스토리지 초기화
   localStorage.clear();
   
   // isAuthenticated 값 복원
   localStorage.setItem('isAuthenticated', 'true');

   window.location.reload();
 };

  return (
    <div className="empty-result">
      <h3>잘못된 주소입니다.</h3>
      <p>건축물대장 전유부가 없는 주소지입니다.</p>
      <p>아파트, 주거용 오피스텔 등의 집합건축물로 검색 해 주세요.</p>
      <button onClick={handleBackClick}>다시 검색하기</button>
    </div>
  );
}

export default CannotfindDoc;