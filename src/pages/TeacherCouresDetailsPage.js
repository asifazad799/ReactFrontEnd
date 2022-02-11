import React, { useEffect } from 'react';
import TopNav from '../components/students/topNav/teacherTopNav';
import Container from '@mui/material/Container';
import Fotter from '../components/students/footer/Footer';
import TeacherMainPageBody from '../components/students/TeacherMainPage/TeacherMainPageBody';
import CourseDtailsPageBody from '../components/students/TeacherCourseDetails/TeacherCourseDetailsBody';
import { setSideNavOpen, setSideNavClose } from '../components/students/redux-toolkit/TeacherSideNav'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'


function TeacherCouresDtailsPage() {

    const dispatch = useDispatch();
    const params = useParams()

    useEffect(() => {

    }, [])

    return (
        <div>
            <div style={{ position: "fixed", width: "100%", top: 0, backgroundColor: "white", left: 0 }}>
                <TopNav sideBar={true} />
            </div>
            <div style={{ marginTop: "100px" }} onClick={() => {
                dispatch(setSideNavClose())
            }}>
                <Container maxWidth="lg">
                    <TeacherMainPageBody>
                        <CourseDtailsPageBody id={params} />
                    </TeacherMainPageBody>
                    <Fotter />
                </Container>
            </div>
        </div>
    )
}

export default TeacherCouresDtailsPage;
