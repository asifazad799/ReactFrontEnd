import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Img from '../asset/node_js.png';
import UpdateIcon from '@mui/icons-material/Update';
import LanguageIcon from '@mui/icons-material/Language';
import DateRangeIcon from '@mui/icons-material/DateRange';

function CourseDetailsBodyTop(props) {
    console.log(props);
    props.data.date = props.data.date.toString().split('T')[0];
    if(props.data.update){
        props.data.update = props.data.update.toString().split('T')[0];
    }
    return (
        <div style={{display:'flex', justifyContent:"center", width:"100%", backgroundColor:"#F5F5F5", borderRadius:"4px"}}>
            <Grid container spacing={1.4} sx={{p:1.4 }}>
                <Grid item xs={12} sm={7} md={7} lg={5.2} sx={{p:0,  display:"flex", justifyContent:'center'}}>
                    <img src={Img} style={{width:"384px",height:"216px", overflow:'hidden', objectFit:'contain', marginTop:'-8px'}} alt="Img"/>
                </Grid>
                <Grid item xs={12} sm={5} md={5} lg={4.7} sx={{p:0 }}>
                    <div style={{display:'flex', justifyContent:'left'}}>
                        <Typography variant="body1" gutterBottom sx={{fontWeight:600, py:.7, borderRadius:'4px',  backgroundColor:"white", px:2}}>
                            {props.data.language}
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{fontWeight:600, py:.7, borderRadius:'4px',  backgroundColor:"white", px:2, ml:1.5}}>
                            {props.data.category}
                        </Typography>
                    </div>
                    <div style={{width:"100%", marginTop:"6px", borderRadius:"4px", padding:"6px"}}>
                        <Typography variant="body1" sx={{mt:0, color:'rgba(0, 0, 0, 0.7)', fontWeight:600}}>
                            {props.data.title}
                        </Typography>
                    </div>
                    <div style={{width:"80%" , marginTop:"6px", borderRadius:"4px", padding:"6px"}}>
                        <Typography variant="body1" sx={{mt:0, color:'rgba(0, 0, 0, 0.7)', fontWeight:400, fontSize:'13px'}}>
                            {props.data.description}
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={11} md={12} lg={2.1}>
                    <Grid container spacing={1.5} >
                        <Grid item xs={12} sm={4} md={3} lg={12} >
                            <div style={{display:'flex', justifyContent:'space-between', 
                                width:"137px", height:"38px", backgroundColor:"white", paddingBottom:"9px",
                                borderRadius:"4px", paddingTop:'4px', paddingLeft:'4px', paddingRight:'4px' }}>
                                    <div style={{lineHeight:"67px", paddingLeft:"5px"}}>
                                        <DateRangeIcon sx={{color:"#EBB376", height:"34px", width:"34px"}}/>
                                    </div>
                                    <div style={{paddingRight:"5px"}} >
                                        <Typography variant="body1" sx={{fontSize:'15px', fontWeight:600}}>
                                            Posted On
                                        </Typography>
                                        <Typography variant="body1" sx={{fontSize:'15px', fontWeight:400}}>
                                            {props.data.date}
                                        </Typography>
                                    </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} lg={12}  >
                            <div style={{display:'flex', justifyContent:'space-between', 
                                width:"137px", height:"38px", backgroundColor:"white", paddingBottom:"9px",
                                borderRadius:"4px", paddingTop:'4px', paddingLeft:'4px', paddingRight:'4px' }}>
                                <div style={{lineHeight:"67px", paddingLeft:"2px"}}>
                                    <UpdateIcon sx={{color:"#57C28A", height:"34px", width:"34px"}}/>
                                </div>
                                <div style={{paddingRight:"5px"}} >
                                    <Typography variant="body1" sx={{fontSize:'15px', fontWeight:600}}>
                                        updated On
                                    </Typography>
                                    <Typography variant="body1" sx={{fontSize:'15px', fontWeight:400}}>
                                        {
                                            props.data.update? props.data.update : 'None'
                                        }
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} lg={12}  >
                            <div style={{display:'flex', justifyContent:'space-between', 
                                width:"137px", height:"38px", backgroundColor:"white", paddingBottom:"10px",
                                borderRadius:"4px", paddingTop:'4px', paddingLeft:'4px', paddingRight:'4px' }}>
                                <div style={{lineHeight:"68px", paddingLeft:"5px"}}>
                                    <LanguageIcon sx={{color:"#0400AF", height:"34px", width:"34px"}}/>
                                </div>
                                <div style={{paddingRight:"16px"}} >
                                    <Typography variant="body1" sx={{fontSize:'15px', fontWeight:600}}>
                                        Language
                                    </Typography>
                                    <Typography variant="body1" sx={{fontSize:'15px', fontWeight:400}}>
                                        {props.data.language}
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default CourseDetailsBodyTop;