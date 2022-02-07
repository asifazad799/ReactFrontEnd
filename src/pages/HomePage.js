import React ,{useEffect}from 'react';
import TopNav from '../components/students/landingPage/TopNav';
import Footer from '../components/students/footer/Footer';
import HomePageBody from '../components/students/homepage/HomePageBody'
import { useNavigate }  from 'react-router-dom';
import Container from '@mui/material/Container';

// import jwt from 'jsonwebtoken';


function HomePage() {
    const Navigate = useNavigate();
   
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('userInfo'));
  
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
              <HomePageBody/>
              <Footer/>
          </Container>
        </div>
      </div>
    
    )
}

export default HomePage;
