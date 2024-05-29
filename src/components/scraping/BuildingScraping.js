import '@picocss/pico';
import React, { useState } from 'react';
import '../../styles/Scraping.css'; // CSS 파일 임포트
import 'bootstrap/dist/css/bootstrap.min.css';
import PdfViewer from '../../components/scraping/PdfViewers.js';
import { sendPostRequest, sendPostRequest1, sendPostRequest2, sendPostRequest3 } from '../scraping/script/request.js';
import { useAnimatedRemoval } from '../scraping/script/useAnimatedRemoval.js';
import SelectionBox from '../scraping/SelectionBox.js';

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

  const addressSearchState = useAnimatedRemoval();
  const addrSelectState = useAnimatedRemoval();
  const dongSelectState = useAnimatedRemoval();
  const hoSelectState = useAnimatedRemoval();

  const handleAddressSearch = () => {
    console.log(address);
    addressSearchState.hide();

    sendPostRequest(address).then(() => {
      const addrData = localStorage.getItem('addrObj');
      if (addrData) {
        setAddrObj(JSON.parse(addrData));
      }
    });
  };

  const handleAddrSearch = () => {
    addrSelectState.hide();

    sendPostRequest1(addrkey).then(() => {
      const dongData = localStorage.getItem('dongObj');
      if (dongData) {
        setDongObj(JSON.parse(dongData));
      }
    });
  };

  const handleDongSearch = () => {
    dongSelectState.hide();

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

    sendPostRequest3(hokey).then(() => {
      const pdfHex = localStorage.getItem('pdfHex');
      setpdfHex(pdfHex);
      setLoading(false); // 로딩 상태 종료
    }).catch(() => {
      setLoading(false); // 에러 발생 시에도 로딩 상태 종료
    });
  };

  return (
    <div className="background-image">
      <div className="overlay">
        <nav className="container-fluid">
          <ul>
            <li><strong>부동산 검색 포털</strong></li>
          </ul>
        </nav>
        <main className="container">
          <section>
            <hgroup>
              <h2>아파트 및 토지 검색</h2>
              <h3>원하는 위치와 조건을 검색해 보세요.</h3>
            </hgroup>
            <p>아래 검색 창에 원하는 조건을 입력하고 검색 버튼을 클릭하세요.</p>
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
            )}
            {dongObj && !dongSelectState.isHidden && (
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
            )}
            {hoObj && !hoSelectState.isHidden && (
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
            )}
            {loading && (
              <div className="loading-icon">
                <img src="/sky.jpeg" alt="Loading..." />
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