import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Main_banner from '../asset/Online learning-rafiki.svg';
import Main_banner2 from '../asset/mainPageSvg2.svg';
import Main_banner3 from '../asset/Group 107.svg';
import Main_banner4 from '../asset/banner4.svg';
import { useSelector,useDispatch } from 'react-redux';
import {opneModal} from '../redux-toolkit/opneLoginModal'
import {openSignUp,closeSignUp} from '../redux-toolkit/openSignUp';


function LandingPageBody() {
  
  const openMod = useSelector((state)=>{
      return state.modal;
  });
  const dispatch = useDispatch();

  // console.log(openMod);

  let data = [
    {
      banner:Main_banner2,
      title:`Live classes`,
      text:`Chat with educators, ask questions,
      answer live polls, and get your doubts 
      cleared - all while the class is going on`
    },
    {
      banner:Main_banner3,
      title:`Test your knowledge`,
      text:`Each and every courses are
      comes with qizes. You can test 
      yourself how mush you have learned `
    },
    {
      banner:Main_banner4,
      title:`Live Classes`,
      text:`Chat with educators, ask questions,
      answer live polls, and get your doubts 
      cleared - all while the class is going on`
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
                “There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning.” – Jiddu Krishnamurti
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
                    dispatch(opneModal());
                    dispatch(openSignUp())
                  }}>
                  Sign Up Now
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
                marginTop:"-60px"
              }}
             >
              <img src={Main_banner} 
                style={{
                  height:"626px",
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
