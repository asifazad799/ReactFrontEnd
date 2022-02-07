import React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from '../asset/logo.jpg';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TeacherLogin from '../TeacherLogin/TeacherLogin'
import Modal from '@mui/material/Modal';
import { useSelector,useDispatch } from 'react-redux';
import {opneTeacherModal,closeTeacherModal} from '../redux-toolkit/opneTeacherLoginModal';
import { openTeacherSignUp, closeTeacherSignUp } from '../redux-toolkit/openTeacherSignUp';
import Grid from '@mui/material/Grid';
import TeacherProfileIcon from '../topNav/teacherProfileIcon';
import { setSideNavOpen, setSideNavClose } from '../redux-toolkit/TeacherSideNav'




function TopNav(props) {

    const openMod1 = useSelector( state => state.TeacherModal);
    const userData1 = useSelector( state => state.teacher );
    const signUp = useSelector( state => state.TeacherSignUpModalStatus);
    const dispatch = useDispatch();
    // console.log(openMod1);
    let modalWidth = 0;
    signUp ? modalWidth = 720 : modalWidth = 400 ;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: modalWidth,
        bgcolor: 'background.paper',
        border: '2px solid #9F9F9F',
        boxShadow: 24,
        p: 4,
        borderRadius: "4px"
    };

  return (
    <Container maxWidth="lg">
    <Box  sx={{ display: 'flex',justifyContent: 'space-between',pt: 2.1 ,height:'55px', width:"100%", zIndex:30000}}>
        
    <div
        style={{
            display:'flex',
            justifyContent: 'space-between'
        }}
        stye={{width:"100%"}}>

        {
            props.sideBar ? (
                <Box sx={{ display : { sm:"block", xs:"block", md:"none", lg:"none" }, mt:1, mr:2, cursor:"pointer"}} onClick={()=>{
                    dispatch(setSideNavOpen())
                }}>
                    <i className="fad fa-bars fa-2x"></i>
                </Box>
            ) : ""
        }
            
        <div><img src={Logo} style={{width:"37px"}} alt="Logo"></img></div>
        <Typography variant="subtitle1" sx={{mt:1.3,ml:1}} >
            IAcademy
        </Typography>  
    
    </div>
    <div style={{width:"100%"}} onClick={()=>{
        dispatch(setSideNavClose())
    }}>
    </div>
    
    {
        userData1.data ? (
            <TeacherProfileIcon/>
            
        ):(
            <Button variant="contained" className='Login'
            sx={{
                height:"37px",
                pt:0.9,
                backgroundColor:'#57C28A',
                mr:0,
                width:"110px"
                }}
                onClick={()=>{
                    dispatch(opneTeacherModal());
                    dispatch(closeTeacherSignUp());
                }}
                >
            Log In
        </Button>
        )
    }

    {/* <Modal>
    </Modal> */}
   
    <Modal
        open={openMod1}
        onClose={()=>{
            dispatch(closeTeacherModal());
            // dispatch(closeSignUp())
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // maxWidth="md"
        sx={{
            p:10
        }}
    >
         <Box  >
                
                <Grid item  sx={style} xs={12} sm={12}>
                
                    <TeacherLogin/>
                
                </Grid>
        </Box>
</Modal>
</Box>
</Container>

  )
}

export default TopNav;
