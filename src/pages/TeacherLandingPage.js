import Footer from '../components/students/footer/Footer'
import TeacherLandingPageBody from '../components/students/TeacherLandingPage/TeacherLandingPageBody';
import TopNav from '../components/students/topNav/teacherTopNav';
import Container from '@mui/material/Container';
import { useNavigate }  from 'react-router-dom';
import React, { useEffect} from 'react';


function TeacherLandingPage() {
  const Navigate = useNavigate()
  useEffect(()=>{

    let teacher = JSON.parse(localStorage.getItem('teacherInfo'));
    if(teacher){
      Navigate('/teacher/application-status')
    }else{
      Navigate('/teacher')
    }

  },[])
  return (
    <div>
        <div style={{position:"fixed",  width:"100%",top:0, backgroundColor:"white", left:0}}>
          <TopNav sideBar={false}/>
        </div>
        <div style={{marginTop:"100px"}}>
          <Container maxWidth="lg">
              <TeacherLandingPageBody/>
              <Footer/>
          </Container>
        </div>
    </div>
  );
}

export default TeacherLandingPage;
