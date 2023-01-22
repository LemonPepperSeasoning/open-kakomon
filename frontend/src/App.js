import './App.css';
import React, { useState } from "react";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';


// import { useHistory } from 'react-router-dom';
// import { useForm } from 'react-hook-form';

function App() {

  return (
    <>
      <div class="flex flex-col h-screen justify-between">
        <header><Header /></header>
        <main class="mb-auto"><HomePage /></main>
        <footer> <Footer /></footer>
      </div>
    </>
  );
};

export default App;
