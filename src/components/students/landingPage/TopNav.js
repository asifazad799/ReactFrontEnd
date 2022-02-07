import React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from '../asset/logo.jpg';
import Button from '@mui/material/Button';
import "./Topnav.css";
import Typography from '@mui/material/Typography';
import Login from '../login/Login_signup';
import Modal from '@mui/material/Modal';
import { useSelector,useDispatch } from 'react-redux';
import {opneModal,closeModal} from '../redux-toolkit/opneLoginModal';
import {openSignUp,closeSignUp} from '../redux-toolkit/openSignUp';
import ProfileIcon from '../profileIcon/profileIcon';


const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #9F9F9F',
        boxShadow: 24,
        p: 4,
        borderRadius:"4px"
    };

function TopNav() {
    
    const openMod = useSelector((state)=>{
            return state.modal;
    });
    const userData1 = useSelector((state)=>{
        return state.user
    })
    const dispatch = useDispatch();
    // console.log(open);
    
    return (
        
        <Container maxWidth="lg">
            <Box  sx={{ display: 'flex',justifyContent: 'space-between', pt: 2.1 ,height:'55px', width:"100%"}}>
                <div
                    style={{
                        display:'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <div><img src={Logo} style={{width:"37px"}} alt="Logo"></img></div>
                    <Typography variant="subtitle1" sx={{mt:1.3,ml:1}} >
                        IAcademy
                    </Typography>  
                
                </div>
                {
                    userData1.data ? (
                        <ProfileIcon/>
                    ):(
                        <Button variant="contained" className='Login'
                        sx={{
                            height:"37px",
                            pt:0.9,
                            backgroundColor:'#57C28A'
                            }}
                            onClick={()=>{dispatch(opneModal())}}
                            >
                        Log In
                    </Button>
                    )
                }   
               
                <Modal
                    open={openMod}
                    onClose={()=>{
                        dispatch(closeModal());
                        dispatch(closeSignUp())
                    }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                       <Login/>
                    </Box>
                </Modal>
            </Box>
        </Container>
    );
}

export default TopNav;
