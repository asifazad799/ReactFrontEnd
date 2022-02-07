import React,{ useEffect } from 'react';
import TeachersApplications from '../components/students/adminTeacherApplications/teacherApplications';
import { useNavigate }  from 'react-router-dom';
import Dashboard from '../components/students/adminDashboard/AdminDashboard';


function AdminTeachersApplications() {
  const Navigate = useNavigate()
  useEffect(()=>{
    const admin = JSON.parse(localStorage.getItem('adminInfo'));

    if(admin){

      Navigate('/admin/teachers-application')
    }else{
      Navigate('/admin')
    }
  },[])
  return (
      <Dashboard title="Teacher's Applications">
        <TeachersApplications title="Teacher's Applications"/>
      </Dashboard>
  )
}

export default AdminTeachersApplications;
