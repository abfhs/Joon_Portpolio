import axios from 'axios';

// const hostURL = "http://127.0.0.1:6600"

//koyeb주소
const hostURL = "https://depressed-mariquilla-joonzero-555b86c3.koyeb.app";

//로그인부터 주소로 검색까지
export const sendPostRequest = async (address) => {
    var postData = {};
    postData.cookieString = ""
    postData.address = address;
    // postData.address = "과수원길25번길4";

    await axios.post(hostURL + "/getLogin", postData, { "Content-Type": "application/json" })
        .then(function (response) {
            // alert("주소 검색에 성공했습니다.");
            localStorage.setItem('cookieString', response.data.cookieString);
            localStorage.setItem('addrObj', JSON.stringify(response.data.data));
        })
        .catch(function (error) {
            alert("POST 요청 전송 중 오류가 발생했습니다.");
            console.error(error);
            clearLocalStorageAndRefresh();
        });
};

//동 검색
export const sendPostRequest1 = async (addrKey) => {
    var postData = {};
    postData.cookieString = localStorage.getItem('cookieString')
    postData.addrCode = addrKey;

    await axios.post(hostURL + "/findDong", postData, { "Content-Type": "application/json" })
        .then(function (response) {
            // alert("동 검색에 성공했습니다.");
            localStorage.setItem('cookieString', response.data.cookieString);
            localStorage.setItem('dongObj', JSON.stringify(response.data.data));
        })
        .catch(function (error) {
            alert("POST 요청 전송 중 오류가 발생했습니다.");
            console.error(error);
            clearLocalStorageAndRefresh();
        });
};

//호 검색
export const sendPostRequest2 = async (dongKey) => {
    var postData = {};
    postData.cookieString = localStorage.getItem('cookieString')
    postData.dongCode = dongKey;

    await axios.post(hostURL + "/findHo", postData, { "Content-Type": "application/json" })
        .then(function (response) {
            // alert("POST 요청이 성공적으로 전송되었습니다.");
            localStorage.setItem('cookieString', response.data.cookieString);
            localStorage.setItem('hoObj', JSON.stringify(response.data.data));
        })
        .catch(function (error) {
            alert("POST 요청 전송 중 오류가 발생했습니다.");
            console.error(error);
            clearLocalStorageAndRefresh();
        });
};


//pdf발급 요청
export const sendPostRequest3 = async (hokey) => {
    var postData = {};
    postData.cookieString = localStorage.getItem('cookieString')
    postData.jusoJson = hokey;
    // postData.jusoJson = {
    //     "sigunguCd": "41610",
    //     "bjdongCd": "10100",
    //     "platGbCd": "0",
    //     "mnnm": "0135",
    //     "slno": "0043",
    //     "bldrgstCurdiGbCd": "0",
    //     "bldrgstSeqno": "1125176049",
    //     "upperBldrgstSeqno": "1125132032",
    //     "regstrGbCd": "2",
    //     "regstrKindCd": "4",
    //     "regstrKindNm": "전유부",
    //     "sigunguNm": "경기도 광주시",
    //     "bjdongNm": "경안동",
    //     "hoNm": "101호",
    //     "totArea": "53.94",
    //     "ownrYn": "N",
    //     "multiUseBldYn": "N",
    //     "blprtYn": "Y",
    //     "plplanIncYn": "N",
    //     "mjrfmlyYn": "N",
    //     "untClsfCd": "1125"
    // };

    await axios.post(hostURL + "/getPdf", postData, { "Content-Type": "application/json" })
        .then(function (response) {
            // alert("POST 요청이 성공적으로 전송되었습니다.");
            localStorage.setItem('cookieString', response.data.cookieString);
            localStorage.setItem('pdfHex', JSON.stringify(response.data.data));
        })
        .catch(function (error) {
            alert("죄송합니다.. 세움터 사이트가 변경되어 스크래핑 오류가 발생했습니다! 최대한 빠르게 수정하겠습니다!");
            console.error(error);
            clearLocalStorageAndRefresh();
        });
};


// LocalStorage 데이터를 삭제하고 페이지를 새로고침하는 함수
function clearLocalStorageAndRefresh() {
    localStorage.clear();
    window.location.reload();
}