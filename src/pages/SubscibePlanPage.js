import React, { useEffect } from 'react';
import TopNav from '../components/students/landingPage/TopNav';
import Container from '@mui/material/Container';
import Body from '../components/students/studentPlanSubscriptionBody/subscribePlanBody'
import Footer from '../components/students/footer/Footer'
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function SubscibePlanPage() {
    const Navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('userInfo'));
    useEffect(()=>{

        if(!user){
          Navigate('/')
        }

    },[])
    return(
        <div>
            <div style={{position:"fixed",  width:"100%",top:0, backgroundColor:"white", left:0}}>
                <TopNav/>
            </div>
            <div style={{marginTop:"100px"}}>
                <Container maxWidth="lg">
                    <Typography  sx={{color:"#5F5F5F", fontWeight:500, my:5, fontSize:"30px"}} gutterBottom component="div">
                        All available plans
                    </Typography>
                    <Body/>
                    <Footer/>
                </Container>
            </div>
        </div>
    );
}

export default SubscibePlanPage;
