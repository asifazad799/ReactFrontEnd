import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import React,{useEffect} from 'react';
import {Routes,Route ,useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { setUser } from './components/students/redux-toolkit/userValidation';
import './App.css';
import TeacherLandingPage from './pages/TeacherLandingPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminTeachersApplicationsPage from './pages/AdminTeachersApplications';
import { setAdmin } from './components/students/redux-toolkit/adminValidation';
import { setTeacher } from './components/students/redux-toolkit/teacherValidation';
import TeacherAppStatusPage from './pages/TeacherAppStatusPage';
import SubscrptionPage from './pages/SubscibePlanPage';
import TeacherDashBoard from './pages/TeacehrDashboard';
import TeacherCourse from './pages/TeacherCoursesPage';
import CourseDetailsPage from './pages/TeacherCouresDtailsPage'

function App() {

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const admin = JSON.parse(localStorage.getItem('adminInfo'));
    const teacher = JSON.parse(localStorage.getItem('teacherInfo'));
    if(user){
      dispatch(setUser(user)); 
    }
    if(admin){
      dispatch(setAdmin(admin)); 
    }
    if(teacher){
      dispatch(setTeacher(teacher))
    }
  },[]);

  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/subscriptions-plans" element={<SubscrptionPage/>}/>
        <Route path="/teacher" element={<TeacherLandingPage/>}/>
        <Route path="/teacher/application-status" element={<TeacherAppStatusPage/>}/>
        <Route path="/teacher/dashboard" element={<TeacherDashBoard/>}/>
        <Route path="/teacher/courses" element={<TeacherCourse/>}/>
        <Route path="/teacher/course-details" element={<CourseDetailsPage/>}/>
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="/admin/teachers-application" element={<AdminTeachersApplicationsPage/>}/>
    </Routes>
  );
}

export default App;