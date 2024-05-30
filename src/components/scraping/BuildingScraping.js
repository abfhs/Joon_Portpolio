import '@picocss/pico';
import React, { useState, useEffect } from 'react';
import { sendPostRequest, sendPostRequest1, sendPostRequest2, sendPostRequest3 } from '../scraping/script/request.js';
import { useAnimatedRemoval } from '../scraping/script/useAnimatedRemoval.js';
import '../../styles/Scraping.css'; // CSS 파일 임포트
import 'bootstrap/dist/css/bootstrap.min.css';

import ProgressBar from 'react-bootstrap/ProgressBar';

import PdfViewer from '../../components/scraping/PdfViewers.js';
import SelectionBox from '../scraping/SelectionBox.js';
import CannotfindAddr from '../scraping/CannotfindAddr.js';
import CannotfindDoc from '../scraping/CannotfindDoc.js';

function BuildingScraping() {

  const [address, setAddress] = useState('');
  const [addrObj, setAddrObj] = useState(null);
  const [addrkey, setAddrkey] = useState("");

  const [dongObj, setDongObj] = useState(null);
  const [dongkey, setDongkey] = useState("");

  const [hoObj, setHoObj] = useState(null);
  const [hokey, setHokey] = useState(null);

  const [pdfHex, setpdfHex] = useState("");
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const [progress, setProgress] = useState(0); // 진행률 상태 추가
  const [animationDuration, setAnimationDuration] = useState('1s'); // 애니메이션 지속 시간 추가

  const addressSearchState = useAnimatedRemoval();
  const addrSelectState = useAnimatedRemoval();
  const dongSelectState = useAnimatedRemoval();
  const hoSelectState = useAnimatedRemoval();

  const handleAddressSearch = () => {
    setProgress(0); // 초기화
    setAnimationDuration('1s'); // 애니메이션 지속 시간 설정
    addressSearchState.hide();

    setTimeout(() => setProgress(25), 0); // 25%로 설정
    sendPostRequest(address).then(() => {
      const addrData = localStorage.getItem('addrObj');
      if (addrData) {
        setAddrObj(JSON.parse(addrData));
      }
    });
  };

  const handleAddrSearch = () => {
    addrSelectState.hide();

    setTimeout(() => setProgress(50), 0); // 50%로 설정
    sendPostRequest1(addrkey).then(() => {
      const dongData = localStorage.getItem('dongObj');
      if (dongData) {
        setDongObj(JSON.parse(dongData));
      }
    });
  };

  const handleDongSearch = () => {
    dongSelectState.hide();

    setTimeout(() => setProgress(75), 0); // 75%로 설정
    sendPostRequest2(dongkey).then(() => {
      const hoData = localStorage.getItem('hoObj');
      if (hoData) {
        setHoObj(JSON.parse(hoData));
      }
    });
  };

  const handleHoSearch = () => {
    hoSelectState.hide();
    setLoading(true); // 로딩 상태 시작

    setAnimationDuration('8s'); // 애니메이션 지속 시간 8초로 설정
    setTimeout(() => setProgress(96), 0); // 96%로 설정

    sendPostRequest3(hokey).then(() => {
      const pdfHex = localStorage.getItem('pdfHex');
      setpdfHex(pdfHex);
      setLoading(false); // 로딩 상태 종료

      setAnimationDuration('1s'); // 애니메이션 지속 시간 1초로 재설정
      setTimeout(() => setProgress(100), 0); // 100%로 설정
    }).catch(() => {
      setLoading(false); // 에러 발생 시에도 로딩 상태 종료
    });
  };

  return (
    <div className="background-image">
      <div className="overlay">
        <nav className="container-fluid">
          <ul>
            <li><strong>강준영 포트폴리오</strong></li>
          </ul>
        </nav>
        <main className="container">
          <section>
            <hgroup>
              <h2>집합 건축물대장 전유부 발급</h2>
              <h3>원하는 위치와 조건을 검색해 보세요.</h3>
            </hgroup>
            <div class="progress-div">
            <ProgressBar 
                 animated 
                 variant="warning"
                 now={progress} 
                 label={<span style={{ color: 'black' }}>{`${progress}%`}</span>}  
                 style={{ 
                   transition: `width ${animationDuration} ease-in-out`, 
                   marginBottom: '20px'
                 }} 
               />
            </div>
            {!addressSearchState.isHidden && (
              <div className={`search-container ${!addressSearchState.isVisible ? "hide-search" : ""}`}>
                <form className="search-form" action="#" method="get" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" id="search" name="search" placeholder="주소를 입력하고 '주소검색' 버튼을 누르세요." aria-label="검색어" required
                    onChange={(e) => setAddress(e.target.value)} 
                  />
                  <button type="button" onClick={handleAddressSearch}>검색</button>
                </form>
                <img src="/sky.jpeg" alt="Profile" />
              </div>
            )}
            {addrObj && !addrSelectState.isHidden && (
              addrObj.hits.hits.length === 0 ? (
                <CannotfindAddr /> // 에러페이지 컴포넌트
              ) : (
                <SelectionBox
                  data={addrObj.hits.hits.map(item => ({ value: item._source.mgmUpperBldrgstPk, label: item._source.jibunAddr }))}
                  onChange={setAddrkey}
                  onSubmit={handleAddrSearch}
                  placeholder="원하는주소를 선택하세요"
                  buttonText="동검색"
                  containerClass={`addr-container ${!addrSelectState.isVisible ? "hide-addr" : ""}`}
                  imgPath="/sky.jpeg"
                  selectClass=""
                  buttonClass="select-button"
                />
              )
            )}

            {dongObj && !dongSelectState.isHidden && (
              dongObj.hits.hits.length === 0 ? (
                <CannotfindDoc /> // 에러페이지 컴포넌트
              ) : (
                <SelectionBox
                  data={dongObj.hits.hits.map(item => ({ value: JSON.stringify(item), label: item._source.dongNm }))}
                  onChange={setDongkey}
                  onSubmit={handleDongSearch}
                  placeholder="원하는동을 선택하세요"
                  buttonText="호검색"
                  containerClass={`dong-container ${!dongSelectState.isVisible ? "hide-dong" : ""}`}
                  imgPath="/sky.jpeg"
                  selectClass=""
                  buttonClass="select-button"
                />
              )
            )}
            {hoObj && !hoSelectState.isHidden && (
              hoObj.hits.hits.length === 0 ? (
                <CannotfindDoc /> // 에러페이지 컴포넌트
              ) : (
                <SelectionBox
                  data={hoObj.findExposList.map(item => ({ value: JSON.stringify(item), label: item.hoNm }))}
                  onChange={setHokey}
                  onSubmit={handleHoSearch}
                  placeholder="원하는호를 선택하세요"
                  buttonText="발급"
                  containerClass={`ho-container ${!hoSelectState.isVisible ? "hide-ho" : ""}`}
                  imgPath="/sky.jpeg"
                  selectClass=""
                  buttonClass="select-button"
                />
              )
            )}
            {loading && (
              <div className="loading-page">
                <img src="/profile_fake.png" alt="Loading..." />
              </div>
            )}
            {pdfHex && <PdfViewer hexString={pdfHex} />}
          </section>
        </main>
      </div>
    </div>
  );
}

export default BuildingScraping;