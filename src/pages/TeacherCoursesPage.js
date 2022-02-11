import React, {useEffect, useState} from 'react';
import TopNav from '../components/students/topNav/teacherTopNav';
import Container from '@mui/material/Container';
import TeacherMainPageBody from '../components/students/TeacherMainPage/TeacherMainPageBody';
import Fotter from '../components/students/footer/Footer';
import Typography from '@mui/material/Typography';
import { setSideNavOpen, setSideNavClose } from '../components/students/redux-toolkit/TeacherSideNav'
import { useSelector,useDispatch } from 'react-redux';
import CoursesBody from '../components/students/TeacherCourses/TeacherCoursesPageBody';
import { useNavigate } from 'react-router-dom';
import { openAddNewCourseModal } from '../components/students/redux-toolkit/TeacherAddNewCourseModal'

function TeacherCoursesPage() {
    const dispatch = useDispatch();
    const Navigate = useNavigate()

    useEffect(()=>{
        let teacher = JSON.parse(localStorage.getItem('teacherInfo'));
        if(teacher){
            // console.log(teacher.user.status);
            if(teacher.user.status === "pending" || teacher.user.status === "rejected"){
              Navigate('/teacher/application-status')
            }else if(teacher.user.status === "approved"){
              Navigate('/teacher/courses')
            }
          }else{
            Navigate('/teacher')
          }
    },[])
    return (
        <div>
            <div style={{position:"fixed",  width:"100%",top:0, backgroundColor:"white", left:0}}>
              <TopNav sideBar={true}/>
            </div>
            <div style={{marginTop:"80px"}} onClick={()=>{
                dispatch(setSideNavClose())
            }}>
              <Container maxWidth="lg">
                <div style={{display:"flex", justifyContent:"space-between", bottom:"0px"}}>

                  <Typography  sx={{color:"#5F5F5F", fontWeight:500, mt:-.5, mb:2, fontSize:"30px"}} gutterBottom component="div">
                      Courses
                  </Typography>
                  <div>
                    <Typography  sx={{
                      fontWeight:'medium',
                      color:"white",
                      fontSize:"14px",
                      p:1.3,
                      backgroundImage: "linear-gradient(to right, #57c28a, #5dc38a, #64c58a, #69c68b, #6fc78b)",
                      width:"130px",
                      textAlign:"center",
                      borderRadius:"4px",
                      cursor:"pointer",
                      }}
                      onClick={() => dispatch(openAddNewCourseModal())}
                      >
                          Add New Course
                    </Typography>
                  </div>
                </div>
                <TeacherMainPageBody >
                    <CoursesBody/>
                </TeacherMainPageBody>
                <Fotter/>
              </Container>
            </div>
        </div>
    )
}

export default TeacherCoursesPage;
