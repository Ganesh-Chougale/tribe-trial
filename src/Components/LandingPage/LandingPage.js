import React from 'react';
import "./LandingPage.css";
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function LandingPage() {

  const hop = useNavigate();

  let toApp = (e)=>{
    e.preventDefault();
    hop("/quiz/1")
  }




  return (
    <div className='landpage'>
      <h1>The Quiz App</h1>
      <p>This is quiz application, each question have 4 options to choose, choose correct answers to get score maximum</p>
      <button
      onClick={toApp}
      >Start</button>
    </div>
  )
}

export default LandingPage
