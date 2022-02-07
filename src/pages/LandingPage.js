import React,{ useEffect } from 'react';
import LandingPageBody from '../components/students/landingPage/LandingPageBody';
import TopNav from '../components/students/landingPage/TopNav';
import Footer from '../components/students/footer/Footer';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';


function LandingPage() {

  const Navigate = useNavigate();
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
      <div style={{position:"fixed",  width:"100%",top:0, backgroundColor:"white", left:0}}>
          <TopNav />
      </div>
      <div style={{marginTop:"100px"}}>
        <Container maxWidth="lg">
          <LandingPageBody/>
          <Footer/>
        </Container>
      </div>
    </div>
  );
}

export default LandingPage;
