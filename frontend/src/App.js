import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import GlobalStyles from './Components/Styles/Global';

function App() {
  return (
    <>
    <GlobalStyles/>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;