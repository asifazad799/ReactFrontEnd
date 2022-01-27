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
import homePageBanner from '../asset/home_page.svg';
import RecentCourses from './recentCourses'



function HomePageBody() {

    const openMod = useSelector((state)=>{
        return state.modal;
    });
    const dispatch = useDispatch();
  
    // console.log(openMod);
  
    let data = [
      {
        icon:<i className="fad fa-comment-alt-lines fa-2x"></i>,
        iconColor:"#A600F4",
        title:`Live classes`,
        text:`Chat with educators, ask questions,
        answer live polls, and get your doubts 
        cleared - all while the class is going on`
      },
      {
        icon:<i className="fad fa-book fa-2x"></i>,
        iconColor:"#FF0303",
        title:`Test your knowledge`,
        text:`Each and every courses are
        comes with qizes. You can test 
        yourself how mush you have learned `
      },
      {
        icon:<i className="fad fa-clipboard-list fa-2x"></i>,
        iconColor:"#57C28A",
        title:`Structured courses`,
        text:`All our courses are structured in line with your
        exam syllabus to help you best prepare for it`
      },
      {
        icon:<i className="fad fa-universal-access fa-2x"></i>,
        iconColor:"#EBB376",
        title:'Unlimited access',
        text:`One subscription gets you access to all our live
        and recorded courses to watch from the 
        comfort of any of your devices`
      }
    ]

  return (
    <Grid container>
    
    <Grid container item xs={12} md={6} alignItems="center" 
      sx={{
        mt:4,
        display:"flex",
        alignItems:"center",
        justifyContent:"center", 
      }}
      
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
        <img src={homePageBanner} 
          style={{
            paddingTop:"10px",
            paddingBottom:'40px',
            width:"70%"
          }}>
          
        </img>
      </div>
    </Grid>
    <Grid item xs={12} md={6} sx={{p:6}} >
      
        <Typography  
          sx={{
            fontWeight:'medium',color:"#5F5F5F",fontSize:"37px",mt:-4
          }}>
         Let’s crack your dream <br/>tests
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
    <Grid item xs={12} >
      <Typography  sx={{fontWeight:'medium',color:"#5F5F5F",fontSize:"33px",ml:1}}  >
        The subscription?
      </Typography>
    </Grid>
    <div style={{
         display:"flex",
         
         justifyContent:"center", 
         width:"100%"
    }}>
    <Grid container 
        sx={{
            backgroundColor:'#F5F5F5',
            mt:4,
            borderRadius:'4px',
            p:2,
            height:"100%",
            width:"100%"
            
        }}
        xs={12} md={10}>
    {
      data.map((val)=>{
        return(
          <Grid key={val.title}  item xs={12} md={6} 
            
            sx={{
                
                p:3,display:"flex",
               
                justifyContent:"center",
                width:"100%"
            }}> 
            <div 
            style={{
                backgroundColor:"white",
                width:"100%",
                padding:"20px",
                display:"flex",
                borderRadius:"4px",
                justifyContent:"center",
                paddingTop:"27px"
            }}>
                <div style={{
                    marginTop:".7em",
                    color:`${val.iconColor}`,
                    paddingRight:"10px",
                    fontSize:".9em"
                    
                }}>
                    {val.icon}
                </div>
                <div>
                    <article 
                        style={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            width:"100%",
                            
                        }}
                    >
                    <div>
                        <Typography  sx={{fontWeight:'medium',color:"#5F5F5F",fontSize:"1.5em",ml:1,mb:2}}  >
                        {val.title}
                        </Typography>
                        <Typography  sx={{fontWeight:'normal',color:"#5F5F5F",fontSize:"1em",ml:1,width:"250px"}}  >
                        {val.text}
                        </Typography>
                    </div>
                    </article>
                </div>
            </div>

          </Grid>
        )
      })
    }
   </Grid>
   </div>
   <RecentCourses/>
  </Grid>
  );
}

export default HomePageBody;
