import React from 'react';
import './App.css';

import LandingPage from './Components/LandingPage/LandingPage';
import Quiz from './Components/Quiz/Quiz';
import Result from './Components/Result/Result';
import ErrorPage from './Components/ErrorPage/ErrorPage';

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/quiz/:questionId" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
    );
}

export default App
