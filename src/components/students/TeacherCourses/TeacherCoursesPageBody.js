import React, {useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Banner from '../asset/Empty-amico.svg';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddNewModalData from './AddNewCourseModal';
import CourseDetailsBodyTop from '../TeacherCourseDetails/CourseDetailsBodyTop';
import GetCourseDataAPI from './GetCourseDataAPI';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  bgcolor: 'background.paper',
  borderRadius:"4px",
  border: '2px solid #9F9F9F',
  boxShadow: 24,
  p:4,
};

function TeacherCoursesPageBody() {
  const teacher = JSON.parse(localStorage.getItem('teacherInfo'));
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [courseData, setCourseData] =  React.useState([])

  let getCourseApi = async() => {
    try{
      if(teacher?.user?._id){
          const config = {
              headers: {
              'Content-type': 'application/json',
              },
          }
          const { data } = await axios.post('/teacher/course-data',{
              teacher : teacher?.user?._id
          },config)
          setCourseData(data.courses)
          
      }
      }catch(error){
          console.log(error.response.data.message);
      }
  }

  useEffect(() => {
    getCourseApi()
  },[])

  // let get = true
  
  return (
    <>
      {
        teacher?.user?._id ? (
          courseData.map((val) => {

            return (
              <div key={val._id} onClick={() => {
                // let Id = val._id
                console.log(val._id);
              }}>
                <CourseDetailsBodyTop data={val}/>
              </div>
            )

          })
         
        ) : (
            <div style={{padding:"30px"}}>
            <div style={{display:"flex", justifyContent:"center", paddingTop:"20px", heght:"100%"}}>
              <img src={Banner} style={{width:"50%"}} alt="Banner"/>
            </div>
            <div style={{display:"flex", justifyContent:"center", bottom:"0px"}}>
              <Typography  sx={{
                  fontWeight:'medium',
                  color:"white",
                  fontSize:"17px",
                  p:1.3,
                  backgroundImage: "linear-gradient(to right, #57c28a, #5dc38a, #64c58a, #69c68b, #6fc78b)",
                  width:"200px",
                  textAlign:"center",
                  borderRadius:"4px",
                  cursor:"pointer"
              }}
              onClick={handleOpen}
              >
                  Add New Course
              </Typography>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              >
              
              <Box>
                <Grid item  sx={style} xs={12} sm={12}> 
                  <AddNewModalData/>
                </Grid>
              </Box>
            </Modal>
            
          </div>
        )
      }
      </>

  );
}

export default TeacherCoursesPageBody;
