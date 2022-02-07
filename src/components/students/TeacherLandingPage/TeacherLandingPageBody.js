import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Main_banner from '../asset/teacher_mainModal.svg';
import Main_banner2 from '../asset/teacher_banner1.svg';
import Main_banner3 from '../asset/teacher_banner2.svg';
import Main_banner4 from '../asset/teacher_banner3.svg';
import { useSelector,useDispatch } from 'react-redux';
import { opneTeacherModal,closeTeacherModal } from '../redux-toolkit/opneTeacherLoginModal';
import { openTeacherSignUp, closeTeacherSignUp } from '../redux-toolkit/openTeacherSignUp';


function LandingPageBody() {
  
  const openMod = useSelector((state)=>{
      return state.modal;
  });
  const dispatch = useDispatch();

  // console.log(openMod);

  let data = [
    {
      banner:Main_banner2,
      title:`Earn bigger`,
      text:`Each and every minute of yours is valued
      and counted here. So for every minute 
      you work here gets paid.`
    },
    {
      banner:Main_banner3,
      title:`Build a brigher career`,
      text:`In IAcademy your future is 
      secure. Your each achivements 
      are  valued here.`
    },
    {
      banner:Main_banner4,
      title:`Flexible work arrangements`,
      text:`You can design your own time to work.
      The idea is to help manage work-life  
      balance and benefits of FWA can include 
      reduced employee stress and increased`
    }
  ]

  return (
      
        <Grid container>
          <Grid item xs={12} md={6} sx={{p:6}} order={{xs:2,md:1}}>
            
              <Typography  
                sx={{
                  fontWeight:'medium',color:"#5F5F5F",fontSize:"37px",mt:-4
                }}>
                Largest Learning <br/>Platform
              </Typography>
              <Typography  sx={{fontWeight:'normal',color:"#5F5F5F",fontSize:"18px",mt:2
              }}>
               Tell me and I forget. Teach me and I remember. Involve me and I learn.– Benjamin Franklin
              </Typography>
            
              <button 
                style={{
                  width:"200px",
                  height:"55px",
                  fontSize:"21px",
                  fontWeight:"500",
                  marginTop:'39px',
                  marginBottom:'20px',
                  border:'none',
                  backgroundColor:"#4744EB",
                  borderRadius:"4px",
                  color:"white",
                  cursor:'pointer'}}
                  onClick={()=>{
                    // console.log('asif');
                    dispatch(opneTeacherModal());
                    dispatch(openTeacherSignUp())
                  }}>
                  Start your career
              </button>
           

          </Grid>
          <Grid container item xs={12} md={6} alignItems="center" 
            sx={{
              mt:4,
              display:"flex",
              alignItems:"center",
              justifyContent:"center", 
            }}
            order={{xs:1,md:2}}
          >
            <div
              style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                width:"100%",
                marginTop:"-40px"
              }}
             >
              <img src={Main_banner} 
                style={{
                  height:"526px",
                  marginTop:"-70px",
                  width:"90%"
                }}>
                
              </img>
            </div>
          </Grid>
          <Grid item xs={12} order={{xs:3,md:3}}>
            <Typography  sx={{fontWeight:'medium',color:"#5F5F5F",fontSize:"33px",ml:1}}  >
                   What We Offer?
            </Typography>
          </Grid>
          
          {
            data.map((val)=>{
              return(
                <Grid key={val.title}  item xs={12} md={4} 
                  order={{xs:3,md:3}}
                  sx={{mb:8}}
                > 
                  <div 
                    style={{
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      width:"100%",
                      
                    }}
                  >
                  <img src={val.banner} 
                    style={{
                      height:"506px",
                      marginTop:"-70px",
                      maxWidth:"280px"
                    }}>
                    
                  </img>
                  </div>
                  <div>
                  <article 
                    style={{
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      width:"100%"

                    }}
                  >
                    <div>
                      <Typography  sx={{fontWeight:'medium',color:"#5F5F5F",fontSize:"24px",ml:1,mb:2}}  >
                        {val.title}
                      </Typography>
                      <Typography  sx={{fontWeight:'normal',color:"#5F5F5F",fontSize:"18px",ml:1,width:"250px"}}  >
                        {val.text}
                      </Typography>
                    </div>
                  </article>
                  </div>

    
                </Grid>
              )
            })
          }
          
        </Grid>
      
  );
}

export default LandingPageBody;

