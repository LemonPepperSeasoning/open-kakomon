import './App.css';
import React, { useState } from "react";
import Header from './components/Header/Header'
import HomePage from './pages/HomePage';


// import { useHistory } from 'react-router-dom';
// import { useForm } from 'react-hook-form';

function App() {

  return (
    <>
      <div>
        <Header/>
        <HomePage/>
      </div>
    </>
  );
};

export default App;
