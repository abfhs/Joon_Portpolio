import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { pdfjs } from 'react-pdf';

import 'bootstrap/dist/css/bootstrap.min.css';

// pdfjs 라이브러리의 worker 설정
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ hexString }) => {
    const [pdfData, setPdfData] = useState(null);

    // PDF 헥사값을 Blob으로 변환하고 다운로드
    const handleDownloadPdf = () => {
        const hexStringCleaned = hexString.replace(/["]/g, '');
        const bytes = new Uint8Array(hexStringCleaned.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
        const blob = new Blob([bytes], { type: 'application/pdf' });
        setPdfData(blob); // 상태 업데이트
        saveAs(blob, "downloaded.pdf");
    };

    const moveMain = () => {
         // 로컬 스토리지 초기화
        localStorage.clear();
        // isAuthenticated 값 복원
        localStorage.setItem('isAuthenticated', 'true');
        window.location.reload();
    };

    return (
        <div>
            <h3>문서 보기</h3>
            <p>관련 문서를 PDF 형태로 확인할 수 있습니다.</p>
            <button className="download-button" onClick={handleDownloadPdf}>PDF 다운로드</button>
            <button className="main-button" onClick={moveMain}>다른주소로 검색</button>
            <img src="/Logout.gif" className="logout-img" alt="Loading..." />
        </div>
    );
};

export default PdfViewer;
