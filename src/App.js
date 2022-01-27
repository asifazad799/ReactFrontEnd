import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import React,{useEffect} from 'react';
import {Routes,Route ,useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { setUser } from './components/students/redux-toolkit/userValidation';


function App() {

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    
    if(user){
      dispatch(setUser(user)); 
    }

  },[]);

  return (
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
      </Routes>
  );
}

export default App;
