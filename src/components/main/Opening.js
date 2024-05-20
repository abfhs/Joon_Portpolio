import React, { useEffect, useState } from 'react';
import '../../styles/Opening.css';

const Opening = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const message = "안녕안녕안녕안녕안녕안녕";

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => prev + message[index]);
      setIndex((prevIndex) => {
        var newIndex = prevIndex + 1;
        console.log(newIndex ," "+ message.length)
        if (newIndex === message.length-1) {
          clearInterval(interval);
        }
        return newIndex;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [index, message]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100 && scrollY <= 300) {
      setStep(1);
    } else if (scrollY > 300 && scrollY <= 600) {
      setStep(2);
    } else if (scrollY > 600) {
      setStep(3);
    } else {
      setStep(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <div className={`section section1 ${step > 0 ? 'fade-out' : ''}`}>
        <h1 className="typing-effect">{text}</h1>
      </div>
      <div className={`section section2 ${step === 1 ? 'show' : ''}`}>
        <img src="url('/profile.png')" alt="Profile" className="profile-pic" />
      </div>
      <div className={`section section3 ${step === 2 ? 'show' : ''}`}>
        <div className="profile-details">
          <p>이름: 강준영</p>
          <p>직업: 프론트엔드 개발자</p>
          <p>이메일: example@example.com</p>
        </div>
      </div>
      <div className={`section section4 ${step === 3 ? 'show' : ''}`}>
        <div className="card">
          <h2>프로젝트 경험</h2>
          <p>프로젝트 1: 설명...</p>
          <p>프로젝트 2: 설명...</p>
        </div>
        <div className="card">
          <h2>근무 경력</h2>
          <p>회사 1: 설명...</p>
          <p>회사 2: 설명...</p>
        </div>
      </div>
    </div>
  );
}

export default Opening;
