import React from 'react';
import Typography from '@mui/material/Typography';
import Logo from '../asset/logo.jpg';
import { useNavigate }  from 'react-router-dom';
import User from '../asset/userIcon.svg';
import { useSelector, useDispatch } from 'react-redux';


function TeacherSideNavBar() {
  const teacher = useSelector(state => state.teacher)
  // console.log(teacher);
  const Navigate = useNavigate()
  let data = [
    {
      button:"Dashboard",
      link:"/teacher/dashboard"
    },
    {
      button:"Courses",
      link:"/teacher/courses"
    },
    {
      button:"Payments",
    }
  ]
  return (
        <div style={{padding:"20px"}}>
          <div style={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
            <div style={{backgroundColor:"white", width:"100px", height:"100px", borderRadius:"50%",
              display:"flex", justifyContent:'center', alignItems:"center"
              }}>
              <img src={User} style={{height:"80px", width:"80px"}} alt="User"/>
            </div>
          </div>
          <Typography variant="subtitle1" sx={{ ml:1, fontWeight:500, fontSize:"15px", color:"#5F5F5F", textAlign:"center", mt:3}} >
            {
              teacher?.data?.user.name
            }
          </Typography>
          
          <div style={{}}>
            {
              data.map((val)=>{
                return(
                  <Typography key={val.button} variant="subtitle1" sx={{
                    fontWeight:500, fontSize:"18px",
                    color:"#5F5F5F",
                    textAlign:"center",
                    p:1, 
                    backgroundColor:"white", 
                    borderRadius:"4px", 
                    // border:"1.6px solid #C7C7C7",
                    boxShadow: "0px 1px 4px .6px #888888",
                    cursor:"pointer",
                    marginTop:"20px"
                   }}
                   onClick={()=>{
                    Navigate(val.link)
                   }}>
                    {val.button}
                  </Typography>
                )
              })
            }
            
            <div style={{display:"flex", justifyContent:'center', marginTop:"20px"}}>
              <Typography variant="subtitle1" sx={{
                  fontWeight:400, fontSize:"16px",
                  color:"#5F5F5F",
                  textAlign:"center",
                  py:1, 
                  backgroundColor:"white", 
                  borderRadius:"4px", 
                  // border:"1.6px solid #C7C7C7",
                  boxShadow: "0px 1px 4px .1px #888888",
                  // backgroundImage:"linear-gradient(to right, #c25757, #ce5a61, #da5e6b, #e66176, #f26582)",
                  cursor:"pointer",
                  width:"94px",
                  height:"27px"
                }}>
                  Logout
              </Typography>
            </div>
          </div>
        </div>
  )
}

export default TeacherSideNavBar;
