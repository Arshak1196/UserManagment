import React from 'react';
import { Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import GlobalStyles from './Components/Styles/Global';
import { useSelector } from 'react-redux'
import NotLoggedin from './Pages/NotLoggedin';
import LoogedIn from './Pages/LoogedIn';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user } = useSelector((state) => state.auth)
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<NotLoggedin />}>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
        <Route element={<LoogedIn />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer position='bottom-right'/>
    </>
  );
}

export default App;