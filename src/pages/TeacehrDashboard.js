import React, { useEffect} from 'react';
import TopNav from '../components/students/topNav/teacherTopNav';
import Container from '@mui/material/Container';
import TeacherMainPageBody from '../components/students/TeacherMainPage/TeacherMainPageBody';
import TeacherDashboardBody from '../components/students/TeacherDashBoard/TeacherDashboardBody';
import Fotter from '../components/students/footer/Footer';
import Typography from '@mui/material/Typography';
import { setSideNavOpen, setSideNavClose } from '../components/students/redux-toolkit/TeacherSideNav'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'


function TeacehrDashboard() {
    const dispatch = useDispatch();
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
              <TopNav sideBar={true}/>
            </div>
            <div style={{marginTop:"100px"}} onClick={()=>{
                dispatch(setSideNavClose())
            }}>
              <Container maxWidth="lg">
                <Typography  sx={{color:"#5F5F5F", fontWeight:500, my:2, fontSize:"30px"}} gutterBottom component="div">
                    Profile
                </Typography>
                <TeacherMainPageBody>
                    <TeacherDashboardBody/>
                </TeacherMainPageBody>
                <Fotter/>
              </Container>
            </div>
        </div>
    );
}

export default TeacehrDashboard;
