import React from 'react';
import Grid from '@mui/material/Grid';
import Logo from '../asset/Time management-bro.svg'
import Typography from '@mui/material/Typography';


function appStatusPageBody() {
  return (
    <div style={{ display:'flex', justifyContent:"center", marginBottom:"10px"}}>
      <Grid container sx={{pb:4.9, px:3,  borderRadius:"4px", backgroundColor:"#F5F5F5", width:"70%"}}>

        <Grid item xs={12} md={6} sx={{p:2}}>
          <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center"}}>
              <img src={Logo} width="80%" alt="Logo"/>
          </div>
        </Grid>

        <Grid item xs={12} md={6} sx={{pt:4.9}}>
          <div style={{borderRadius:"4px", backgroundColor:"white", height:"100%", width:"100%" }}>
              <div style={{ padding:"20px"}}>
                <Typography  sx={{fontWeight:'bold',color:"#5F5F5F",fontSize:"19px", ml:1, textAlign:"center"}}  >
                    Verifications
                </Typography>
                <Typography  sx={{fontWeight:400,color:"#5F5F5F",fontSize:"16px", mt:3, textAlign:"center", width:"100%"}}  >
                    Don't worry your application is being verified by authorities, we are looking forward to have partnership with you
                </Typography>
                <Typography  sx={{mt:6 ,fontWeight:'normal',color:"rgba(99, 89, 0, 1)",fontSize:"18px", p:3, backgroundColor:"rgba(255, 230, 0, 0.22)", borderRadius:"4px", textAlign:"center" }}  >
                    <strong>Status : </strong>Pending
                </Typography>
              </div>
          </div>
        </Grid>

      </Grid>
    </div>
  )
}

export default appStatusPageBody;
