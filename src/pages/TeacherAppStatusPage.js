import React,{ useEffect } from 'react';
import Body from '../components/students/TeacherAppStatusPage/appStatusPageBody'
import TopNavBar from '../components/students/topNav/teacherTopNav'
import Footer from '../components/students/footer/Footer'
import { useNavigate }  from 'react-router-dom';
import Container from '@mui/material/Container';


function TeacherAppStatusPage() {
  const Navigate = useNavigate()
  useEffect(()=>{

    let teacher = JSON.parse(localStorage.getItem('teacherInfo'));
    if(teacher){
      // console.log(teacher.user.status);
      if(teacher.user.status === "pending" || teacher.user.status === "rejected"){
        Navigate('/teacher/application-status')
      }else if(teacher.user.status === "approved"){
        Navigate('/teacher/dashboard')
      }
    }else{
      Navigate('/teacher')
    }

  },[])
  return (
        <div>
            <div style={{position:"fixed",  width:"100%",top:0, backgroundColor:"white", left:0}}>
              <TopNavBar sideBar={false}/>
            </div>
            <div style={{marginTop:"100px"}}>
              <Container maxWidth="lg">
                <Body/>
                <Footer/>
              </Container>
            </div>
        </div>
  );
}

export default TeacherAppStatusPage;
