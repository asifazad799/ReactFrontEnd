import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Logo from '../asset/logo.jpg';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setSideNavOpen, setSideNavClose } from '../redux-toolkit/TeacherSideNav'


function Footer() {

  let data = [
    {
      title:"Company",
      links:[
          <NavLink
            className="navbar-item"
            to="/about"
            style={{
              textDecoration:"none",
              color:"#5F5F5F"
            }}
          
          >
            About us
          </NavLink>,
          <NavLink
            className="navbar-item"
            to="/career"
            style={{
              textDecoration:"none",
              color:"#5F5F5F"
            }}
            >
            Career
          </NavLink>,
          <NavLink
          className="navbar-item"
          to="/blogs"
          style={{
            textDecoration:"none",
            color:"#5F5F5F"
          }}
          >
          Blogs
        </NavLink>,
        <NavLink
          className="navbar-item"
          to="/blogs"
          style={{
            textDecoration:"none",
            color:"#5F5F5F"
          }}
          >
          Privacy policy
        </NavLink>,
        <NavLink
          className="navbar-item"
          to="/blogs"
          style={{
            textDecoration:"none",
            color:"#5F5F5F"
          }}
          >
          Terms and conditions          
        </NavLink>
        ]
    },
    {
      title:"Popular Goals",
      links:[
          <NavLink
            className="navbar-item"
            to="/about"
            style={{
              textDecoration:"none",
              color:"#5F5F5F"
            }}
          
          >
            C++
          </NavLink>,
          <NavLink
            className="navbar-item"
            to="/career"
            style={{
              textDecoration:"none",
              color:"#5F5F5F"
            }}
            >
            java
          </NavLink>,
          <NavLink
          className="navbar-item"
          to="/blogs"
          style={{
            textDecoration:"none",
            color:"#5F5F5F"
          }}
          >
          python
        </NavLink>,
        <NavLink
          className="navbar-item"
          to="/blogs"
          style={{
            textDecoration:"none",
            color:"#5F5F5F"
          }}
          >
          C#
        </NavLink>,
        <NavLink
          className="navbar-item"
          to="/blogs"
          style={{
            textDecoration:"none",
            color:"#5F5F5F"
          }}
          >
          MongoDb        
        </NavLink>
        ]
    },
    {
      title:"Other Links",
      links:[
          <NavLink
            className="navbar-item"
            to="/about"
            style={{
              textDecoration:"none",
              color:"#5F5F5F"
            }}
          
          >
           User Guidelines
          </NavLink>,
          <NavLink
            className="navbar-item"
            to="/career"
            style={{
              textDecoration:"none",
              color:"#5F5F5F"
            }}
            >
            Site Map
          </NavLink>,
          <NavLink
          className="navbar-item"
          to="/blogs"
          style={{
            textDecoration:"none",
            color:"#5F5F5F"
          }}
          >
         Refund Policy
        </NavLink>,
        <NavLink
          className="navbar-item"
          to="/blogs"
          style={{
            textDecoration:"none",
            color:"#5F5F5F"
          }}
          >
          Legal Notices
        </NavLink>,
        <NavLink
          className="navbar-item"
          to="/blogs"
          style={{
            textDecoration:"none",
            color:"#5F5F5F"
          }}
          >
          Plus subscriptions       
        </NavLink>
        ]
    }
  ]
  const dispatch = useDispatch()
  return (
      <Grid item container sx={{pb:4 ,pt:5}} 
      onClick={()=>{
        dispatch(setSideNavClose())
    }}>
          <Grid item xs={6} md={3} 
            sx={{
             p:6
            
            }}>
              <div
                style={{
                    display:'flex'
                }}
              >
                    <div><img src={Logo} style={{width:"37px"}}></img></div>
                    <Typography variant="subtitle1" sx={{mt:1.3,ml:1}} >
                        IAcademy
                    </Typography>  
                
              </div>
              <div
                style={{
                  display:'flex',
                  width:"140px",
                  justifyContent:"space-around",
                  marginTop:"10px"
              }}
              >
             
                <i className="fab fa-youtube fa-lg"></i>
                <i className="fab fa-instagram fa-lg"></i>
                <i className="fab fa-facebook-square fa-lg"></i>
                <i className="fab fa-linkedin fa-lg"></i>
                <i className="fab fa-twitter-square fa-lg"></i>
              
              </div>
          </Grid>

          {
            data.map((val)=>{
              return(
                <Grid item key={val.title} xs={6} md={3} 
                  sx={{
                    backgroundColor:"white",
                    mb:3,
                    p:6

                  }}>

                  <Typography  sx={{fontWeight:'normal',color:"#5F5F5F",fontSize:"18px",ml:1 , color:"#3F3F3F"}}  >
                      {val.title}
                  </Typography>
                  
                      {
                        val.links.map((val2)=>{
                          return(
                            <Typography key = {val2.props.children}   sx={{fontWeight:'normal',color:"#5F5F5F",fontSize:"14px",ml:1}}  >
                              {val2}
                            </Typography>
                          )
                        })
                      }
                </Grid>
              )
            })
          }

      </Grid>
  );
}

export default Footer;
