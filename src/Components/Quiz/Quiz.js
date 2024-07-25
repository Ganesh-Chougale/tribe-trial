import React, { useState } from 'react'
import "./Quiz.css";
import QB from '../QB/QB';

import { useParams, useSearchParams } from "react-router-dom";

function Quiz() {

  const {questionId} = useParams();

  let [currentQIndex, setCurrentQIndex] = useState(0);

  let nextQ = (e)=>{
    e.preventDefault();
    setCurrentQIndex(prevIndex => prevIndex+1);
  }

  const question = QB[currentQIndex].question;
  const opt1 = QB[currentQIndex].answers.option1;
  const opt2 = QB[currentQIndex].answers.option2;
  const opt3 = QB[currentQIndex].answers.option3;
  const opt4 = QB[currentQIndex].answers.option4;
  let curq = currentQIndex+1;


  console.log(question);

  return (
    <div className='thisQuiz'>

      <div className='quizBox'>
        
        <div className="quesBox">
          <h3>{question}</h3>
        </div>
        <div className="ansBox">
          <ul>
          <li>
                <input type="radio" name="answer" id="1" />
                    <label htmlFor="1">{opt1}</label>
                </li>
                <li>
                <input type="radio" name="answer" id="2" />
                    <label htmlFor="2">{opt2}</label>
                </li>
                <li>
                <input type="radio" name="answer" id="3" />
                    <label htmlFor="3">{opt3}</label>
                </li>
                <li>
                <input type="radio" name="answer" id="4" />
                    <label htmlFor="4">{opt4}</label>
                </li>
          </ul>
          <div className='btnBox'>
            <button onClick={nextQ}>Submit</button>
            <button>End Session</button>
          </div>
      </div>
      <br />

      <div className='qCounter'>
        <h3>{curq}/10</h3>
      </div>
        </div>


    </div>
  )
}

export default Quiz
