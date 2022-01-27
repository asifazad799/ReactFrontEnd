import React ,{useEffect}from 'react';
import TopNav from '../components/students/landingPage/TopNav';
import Footer from '../components/students/footer/Footer';
import HomePageBody from '../components/students/homepage/HomePageBody'
import { useNavigate }  from 'react-router-dom';
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
            <TopNav/>
            <HomePageBody/>
            <Footer/>
        </div>
    
    )
}

export default HomePage;
