import React from 'react';
import Grid from '@mui/material/Grid';
import Logo from '../asset/subscrptions.svg'
import Typography from '@mui/material/Typography';


function appStatusPageBody() {

    let data = [
        {
            title:"Prime Plus",
            features:["Pre-recorded classes", "Live classes", "Quizes", "Certification"]
        },
        {
            title:"Prime",
            features:["Pre-recorded classes", "Quizes", "Certification"]
        }
    ]

  return (
    <div style={{ display:'flex', justifyContent:"center", marginBottom:"10px"}}>
      <Grid container sx={{pb:4.9, px:3,  borderRadius:"4px", backgroundColor:"#F5F5F5", width:"100%"}}>

        <Grid item xs={12} md={4} sx={{p:2, mt:3}}>
          <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center"}}>
              <img src={Logo} width="77%" alt="Logo"/>
          </div>
        </Grid>

        {
            data.map((val)=>{
                return (
                    <Grid item xs={12} md={4} sx={{pt:4.9, pr:1}}>
                        <div style={{borderRadius:"4px", backgroundColor:"white", height:"100%", width:"100%" }}>
                            <div style={{ padding:"20px"}}>
                                <Typography  sx={{fontWeight:'bold',color:"rgba(0, 0, 0, 0.7)",fontSize:"21px", mb:3, ml:1, textAlign:"left"}}  >
                                    {val.title}
                                </Typography>
                                <div style={{minHeight:"180px", width:"100%"}}>
                                {
                                    val.features.map((val2)=>{
                                        return(
                                            <div style={{display:"flex", marginLeft:"7.5px", paddingBottom:"4px", paddingTop:"17px"}}>
                                                <i className="fas fa-arrow-square-right fa-lg" style={{color:"rgba(0, 0, 0, 0.54)"}}></i>
                                                <Typography  sx={{fontWeight:400,color:"rgba(0, 0, 0, 0.54)",fontSize:"16px", mt:-.6,ml: 1, textAlign:"left", width:"100%" }}  >
                                                    {val2}
                                                </Typography> 
                                            </div>
                                        )
                                    })
                                }
                                </div>
                                <div style={{display:"flex" ,justifyContent:"center", }}>
                                    {/* <div style={{bottom:0, }}> */}
                                    <Typography  sx={{mt:3 ,fontWeight:'normal',color:"white",fontSize:"18px", px:4, py:1.5, backgroundColor:"#57C28A", borderRadius:"4px", textAlign:"center" }}  >
                                        <strong>Subscribe</strong>
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </Grid>
                )
            })
        }
      </Grid>
    </div>
  )
}

export default appStatusPageBody;

