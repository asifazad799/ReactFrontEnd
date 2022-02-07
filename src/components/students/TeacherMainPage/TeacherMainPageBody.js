import React, { useEffect, useRef } from 'react';
import SideNav from './TeacherSideNavBar'
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { setSideNavOpen, setSideNavClose } from '../redux-toolkit/TeacherSideNav'
import Box from '@mui/material/Box';


function TeacherMainPageBody(props) {
    // console.log (props);
    const sidenav = useSelector(state => state.tacherSideNav)
    // console.log(sidenav);
    let sedeNavWidth = "0px";
    let shadow = "50px 0px 10px 0px rgba(192, 192, 192, 0.48)"
    const dispatch = useDispatch()


    if(sidenav!==false){
        sedeNavWidth = "240px"
        shadow = "50px 0px 10px 567px rgba(120, 120, 120, 0.48)"
    }
    // console.log(onClickOutside);

    return (
        <div>
            <Box   style={{
                width:sedeNavWidth, position: "fixed", 
                zIndex: 1,
                top:0,
                left:0,
                overflowX: "hidden",
                transition: "0.5s",
                display : { sm:"block", xs:"block", md:"none", lg:"none"},
                boxShadow: shadow
            }}>
                <Box style={{
                    backgroundColor:"#F5F5F5", width:"100%" , height:"100vh",  display : { sm:"block", xs:"block", md:"none", lg:"none"}}}>
                    <SideNav/>
                </Box>
            </Box>
            <Grid container spacing={2} onClick={()=>{
                dispatch(setSideNavClose())
            }} >
                <Grid item md={2.4} sx={{ display : { sm:"none", xs:"none", md:"block"}}}> 
                    <div style={{backgroundColor:"#F5F5F5", width:"100%", minHeight:"70vh", borderRadius:"4px"}}>
                        <SideNav/>
                    </div>
                </Grid>
                <Grid item md={9.6} sm={12} xs={12}>
                    <div style={{backgroundColor:"#F5F5F5", width:"100%", minHeight:"30vh", right:0, borderRadius:"4px"}}>
                        {
                            props.children
                        }
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default TeacherMainPageBody;
