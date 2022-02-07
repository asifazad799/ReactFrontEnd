import React from 'react';
import TopNav from '../components/students/topNav/teacherTopNav';
import Container from '@mui/material/Container';
import Fotter from '../components/students/footer/Footer';
import TeacherMainPageBody from '../components/students/TeacherMainPage/TeacherMainPageBody';
import CourseDtailsPageBodyTop from '../components/students/TeacherCourseDetails/CourseDetailsBodyTop';
import { setSideNavOpen, setSideNavClose } from '../components/students/redux-toolkit/TeacherSideNav'
import { useSelector,useDispatch } from 'react-redux';

function TeacherCouresDtailsPage() {
    const dispatch = useDispatch();

    return (
        <div>
            <div style={{position:"fixed",  width:"100%",top:0, backgroundColor:"white", left:0}}>
                <TopNav sideBar={true}/>
            </div>
            <div style={{marginTop:"100px"}} onClick={()=>{
                    dispatch(setSideNavClose())
                }}>
                    <Container maxWidth="lg">
                        <TeacherMainPageBody>
                            <CourseDtailsPageBodyTop/>
                        </TeacherMainPageBody>
                        <Fotter/>
                    </Container>
            </div>
        </div>
    )
}

export default TeacherCouresDtailsPage;
