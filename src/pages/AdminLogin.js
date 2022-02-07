import React,{ useEffect } from 'react';
import Login from '../components/students/adminLogin/AdminLoginPage';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate }  from 'react-router-dom';
import Container from '@mui/material/Container';


function AdminLogin() {
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
        <Container maxWidth="lg">
            <Box
            sx={{
                pt:7,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography   sx={{
                fontWeight:500 , 
                color:"#505050",
                backgroundColor:"#F5F5F5",
                p:1.3,
                borderRadius:"4px",
                fontSize:"23px",
                px:3
                }}>
                Admin
            </Typography>

            </Box>
            <Login/>
        </Container>
    );
}

export default AdminLogin;
