import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage'
import LicensingPage from './pages/LicensingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import UniversityPage from './pages/UniversityPage';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './i18n'
import './index.css';
import PostExamPage from './pages/PostExamPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="flex flex-col justify-start h-screen">
      <header><Header /></header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        <Routes>
          <Route path="/university/:schoolName" element={<UniversityPage />} >
            <Route path="/university/:schoolName/exam" element={<UniversityPage />} />
            <Route path="/university/:schoolName/reviews" element={<UniversityPage />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>

        <Routes>
          <Route path="/licensing" element={<LicensingPage />} />
        </Routes>

        <Routes>
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Routes>
          <Route path="/share-exam" element={<PostExamPage />} />
        </Routes>
      </BrowserRouter>

      <br />
      <br />
      <footer className='mt-auto'> <Footer /></footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
