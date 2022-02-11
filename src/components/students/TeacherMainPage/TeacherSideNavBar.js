import React from 'react';
import Typography from '@mui/material/Typography';
import Logo from '../asset/logo.jpg';
import { useNavigate }  from 'react-router-dom';
import User from '../asset/userIcon.svg';
import { useSelector, useDispatch } from 'react-redux';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';

function TeacherSideNavBar() {
  const teacher = useSelector(state => state.teacher)
  // console.log(teacher);
  const Navigate = useNavigate()
  let data = [
    {
      button:"Dashboard",
      link:"/teacher/dashboard",
      icon:<DashboardIcon sx={{color:"#A600F4"}}/>
    },
    {
      button:"Courses",
      link:"/teacher/courses",
      icon:<MenuBookIcon sx={{color:"#EBB376"}}/>
    },
    {
      button:"Payments",
      icon:<AccountBalanceWalletIcon sx={{color:"#57C28A"}}/>
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
                <div key={val.button} style={{display:'flex',backgroundColor:"white", 
                borderRadius:"4px", 
                cursor:"pointer",
                marginTop:"20px"}}>
                  <div style={{marginTop:'12.4px', paddingLeft:"12px", paddingRight:"6px"}}>
                    {val.icon}
                  </div>
                  <Typography key={val.button} variant="subtitle1" sx={{
                    fontWeight:500, fontSize:"18px",
                    color:"#5F5F5F",
                    textAlign:"left",
                    p:1, 
                    
                  }}
                  onClick={()=>{
                    Navigate(val.link)
                  }}>
                    {val.button}
                  </Typography>
                </div>
              )
            })
          }
          <div style={{width:"100%", display:"flex", justifyContent:'center'}}>
          <div style={{display:"flex", justifyContent:'center', marginTop:"20px",  backgroundColor:"white", 
                borderRadius:"4px", 
                cursor:"pointer",
                width:"104px",
                height:"46px"}}>
              <div style={{marginTop:'11px', paddingLeft:"0px", paddingRight:"6px"}}>
                  <LogoutIcon sx={{color:'red'}}/>
              </div>
              <Typography variant="subtitle1" sx={{
                  fontWeight:400, fontSize:"16px",
                  color:"#5F5F5F",
                  textAlign:"left",
                  py:1.1
                }}>
                  Logout
              </Typography>
          </div>
          </div>
        </div>
      </div>
  )
}

export default TeacherSideNavBar;