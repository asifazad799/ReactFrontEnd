import React,{useEffect} from 'react';
import LandingPageBody from '../components/students/landingPage/LandingPageBody';
import TopNav from '../components/students/landingPage/TopNav';
import Footer from '../components/students/footer/Footer';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function LandingPage() {

  const Navigate = useNavigate();
  // const userData = useSelector((state)=>{
  //   return state.user
  // })
  // console.log(userData);
  const user = JSON.parse(localStorage.getItem('userInfo'));
  useEffect(()=>{

        if(user){
          Navigate('/home')
        }else{
          Navigate('/')
        }

    },[])

  return (
    <div>
      <TopNav/>
      <LandingPageBody/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
