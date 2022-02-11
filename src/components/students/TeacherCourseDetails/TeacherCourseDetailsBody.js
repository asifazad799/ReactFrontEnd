import React, { useEffect, useState } from 'react'
import CoursBodyTop from './CourseDetailsBodyTop';
import getCourseApi from './GetCourseApi';
import { useSelector, useDispatch } from 'react-redux';


function TeacherCourseDetailsBody(props) {
    const modalState = useSelector(state => state.editCourseModal)
    const [ courseTop, setCousrseTop] = useState({})

    useEffect(()=>{
        getCourseApi(props).then((res) => {
            setCousrseTop(res)
        })
    },[modalState])
    console.log(modalState);

    return (
        <>
            { courseTop?.courseTop ? <CoursBodyTop teacher={true} data={courseTop?.courseTop}/> : ''}
            <h1>body</h1>
        </>
    )
}

export default TeacherCourseDetailsBody