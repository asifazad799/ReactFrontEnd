import React,{ useRef, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogInIcon from '../asset/Login.svg';
import signUpIcon from '../asset/signup.svg';
import { openTeacherSignUp, closeTeacherSignUp } from '../redux-toolkit/openTeacherSignUp';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import {opneTeacherModal,closeTeacherModal} from '../redux-toolkit/opneTeacherLoginModal';
import { setTeacher } from '../redux-toolkit/teacherValidation' 
import { useNavigate }  from 'react-router-dom';



// const theme = createTheme();


export default function SignIn() {
  
  
  const signUp = useSelector( state => state.TeacherSignUpModalStatus);
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  let password = useRef({});
  password.current = watch("password", "");
  const [loading,setLoading] = useState('');
  const [error,setError] = useState('');
  const [info,setInfo] = useState(false);
  const Navigate = useNavigate()

  const signUpApi = async(signUpData) => {
    setError(false);
    try{
        const config = {
            headers:{
              "Content-type":"application/json"
            }
        }
      setLoading(true);
      const{data} = await axios.post(
        "/teacher/signup",signUpData,
        config
      );
      setLoading(false);
      dispatch(closeTeacherModal());
    }catch(error){

      // console.log(error.response.data.message);
      setError(error.response.data.message);
      setLoading(false);

    }

  }

  const logInApi = async(logData) =>{
    setError(false);
    try{

      const config = {
          headers:{
            "Content-type":"application/json"
          }
      }
      setLoading(true);
      const {data} = await axios.post(
        "/teacher/login",
        logData,
        config
      );
      console.log(data);
      setLoading(false);
      localStorage.setItem('teacherInfo', JSON.stringify(data))
      dispatch(setTeacher(data))
      dispatch(closeTeacherModal());
      Navigate('/teacher/application-status')
    }catch(error){

      console.log(error.response.data.message);
      setError(error.response.data.message);
      setLoading(false);

    }

  }

  return (
    // <ThemeProvider theme={theme}>
      <Container component="main"  maxWidth="lg">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            pt: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pb:2,
            maxHeight:"530px",
            overflowX:"hidden",
            overflowY:"auto"
          }}
        >
          {
              signUp ? (
                  <img src={signUpIcon} 
                      style=
                          {{
                              width:"34px",
                              marginBottom:"10px" }} 
                  />
              ) : (

                  <img src={LogInIcon} 
                      style=
                          {{
                              width:"28px",
                              marginBottom:"10px" }} 
                  />
              )
          }
          <Typography component="h1" variant="h5">
            {
                signUp ? `Sign Up` : `Log in`
            } 
          </Typography>
          { error&&!signUp ?  <Grid item xs={12}  style={{color:'red',fontSize:"14px" ,marginTop:"10px"}}>
            <Alert severity="error">
                    <AlertTitle>{error}</AlertTitle> 
                    Check the entered<strong> email or password </strong>
              </Alert></Grid>:''
          }
          
          <Box container component="form" onSubmit={handleSubmit((e)=>{
              // console.log(e);
              signUp ? signUpApi(e) : logInApi(e);

            })} noValidate 
              sx={{ 
              mt: 3 ,
              width:"100%",
              textAlign:"justify"
            }}>
            {
              signUp? (

                <Grid container spacing={3}>

                  <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="given-name"
                        name="name"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        autoFocus
                        {...register("name",
                          {   
                            required:"This field can't be empty",
                            minLength:{
                                value:6,
                                message:"Minimun 6 charecters"
                                }
                            }
                        )}
                        error={errors.name}
                        helperText={ errors.name ?  errors.name.message : ""}
                      />
                  </Grid>
    
                  <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="given-name"
                        name="mobile"
                        required
                        fullWidth
                        id="mobile"
                        label="Mobile"
                        autoFocus
                        {...register("mobile",
                        {   
                            required:"This field can't be empty",
                            pattern:{
                              value:/^[0-9]+$/,
                              message:"Please enter a valid mobile number"
                            },
                            minLength:{
                                value:10,
                                message:"Minimun 10 charecters"
                                },
                            maxLength:{
                              value:10,
                              message:"Maximum 10 charecters"
                              }  
                        }
                            
                        )}
                        error={errors.mobile}
                        helperText={ errors.mobile ?  errors.mobile.message : ""}
                      />
                  </Grid>
    
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      {...register("password",
                      {   
                        required:"This field can't be empty",
                        minLength:{
                            value:6,
                            message:"Minimun 6 charecters"
                            }
                        }
                    )}
                    error={errors.password}
                    helperText={ errors.password ?  errors.password.message : ""}
                    />
                  </Grid>
    
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="confirm-password"
                      {
                        ...register("confirmPassword",
                        {
                            required:"This field can't be empty",
                            validate: value => value === password.current || "passwords do not match"
                        }
                      )}
                      error={errors.confirmPassword}
                      helperText={ errors.confirmPassword ?  errors.confirmPassword.message : ""}
                    />
                  </Grid>
    
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      {...register('email',
                        {   
                            required:"This field can't be empty",
                            pattern:{ 
                                value : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
                                message:'Enter a valid email'
                              }
                          }
                      )}
                      error={errors.email}
                      helperText={ errors.email ?  errors.email.message : ""}
                    />
                  </Grid>
    
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="state"
                      label="State"
                      name="state"
                      autoComplete="state"
                      autoFocus
                      {...register("state",
                          {   
                            required:"This field can't be empty",
                            minLength:{
                                value:4,
                                message:"Minimun 4 charecters"
                                }
                            }
                        )}
                      error={errors.state}
                      helperText={ errors.state ?  errors.state.message : ""}
                    />
                  </Grid>
    
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="experienceInTeaching"
                      label="Experience In Teaching"
                      id="experienceInTeaching"
                      autoComplete="experienceInTeaching"
                      {...register("experienceInTeaching",
                          {   
                            required:"This field can't be empty",
                            pattern:{
                              value:/^[0-9]+$/,
                              message:"Please enter a number"
                            }
                            }
                        )}
                      error={errors.experienceInTeaching}
                      helperText={ errors.experienceInTeaching ?  errors.experienceInTeaching.message : ""}
                    />
                  </Grid>
    
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="favouriteTopic"
                      label="Favourite Topic"
                      id="favouriteTopic"
                      autoComplete="favouriteTopic"
                      {...register("favouriteTopic",
                          {   
                            required:"This field can't be empty",
                            minLength:{
                                value:4,
                                message:"Minimun 4 charecters"
                                }
                            }
                        )}
                      error={errors.favouriteTopic}
                      helperText={ errors.favouriteTopic ?  errors.favouriteTopic.message : ""}
                    />
                  </Grid>
    
                  <Grid item xs={12} sm={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="aboutPreviousJob"
                      label="About Previous Job"
                      id="aboutPreviousJob"
                      autoComplete="aboutPreviousJob"
                      multiline
                      rows={4}
                      {...register("aboutPreviousJob",
                      {   
                        required:"This field can't be empty",
                        minLength:{
                            value:4,
                            message:"Minimun 4 charecters"
                            }
                        }
                      )}
                      error={errors.aboutPreviousJob}
                      helperText={ errors.aboutPreviousJob ?  errors.aboutPreviousJob.message : ""}
                    />
                  </Grid>
    
                  <Grid item xs={12} sm={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="whyIAcademy"
                      label="Why IAcademy?"
                      id="whyIAcademy"
                      autoComplete="whyIAcademy"
                      multiline
                      rows={4}
                      {...register("whyIAcademy",
                      {   
                        required:"This field can't be empty",
                        minLength:{
                            value:4,
                            message:"Minimun 4 charecters"
                            }
                        }
                      )}
                      error={errors.whyIAcademy}
                      helperText={ errors.whyIAcademy ?  errors.whyIAcademy.message : ""}
                    />
                  </Grid>
                  
    
                </Grid>

              ):(

                <Grid container spacing={3}>

                    <Grid item xs={12} >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        {...register('email',
                          {   
                            required:"This field can't be empty",
                            pattern:{ 
                                value : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
                                message:'Enter a valid email'
                              }
                          }
                      )}
                      error={errors.email}
                      helperText={ errors.email ?  errors.email.message : ""}
                      />
                    </Grid>

                    <Grid item xs={12} >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...register("password",
                        {   
                          required:"This field can't be empty",
                          minLength:{
                              value:6,
                              message:"Minimun 6 charecters"
                              }
                          }
                        )}
                        error={errors.password}
                        helperText={ errors.password ?  errors.password.message : ""}
                      />
                    </Grid>
                </Grid>

              )
            }
           
            
            {
                    signUp ? (
                        ''
                    ):(
                        <Grid item xs sx={{mt:2}}>
                            <Link href="#" variant="body2"  underline="none" color="#757575">
                                Forgot password?
                            </Link>
                        </Grid>
                    )
              }
              { loading && <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p:3,
                  mt:2
                  }}><CircularProgress color="success"/></Box>
              }

              { 
                error&&signUp ?  <Grid item xs={12}  style={{color:'red',fontSize:"14px" ,marginTop:"10px"}}><Alert severity="error">
                    <AlertTitle>{error}</AlertTitle> Check the entered<strong> email or password </strong>
                    </Alert></Grid>:''
              }
            <Box
                    sx={{
                        marginTop: 2,
                        pb:4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Button variant="contained" className='Login'
                        type="sumbit"
                        sx={{
                            height:"37px",
                            pt:1.2,
                            backgroundColor:'#57C28A'
                            }}>
                        {
                            signUp ? `Sign Up` : `Log in`
                        } 
                        
                    </Button>
                </Box>
            <Grid container>
              
              <Grid item>
              {
                  signUp ? (
                      <Link  variant="body2"
                          underline="none" color="#757575"
                          onClick={()=>{
                              dispatch(closeTeacherSignUp());
                              setError(false);
                          }}
                          style={{cursor:"pointer"}}
                          >
                          {"Already have an account? Log In"}
                      </Link>
                  ) :  (
                      <Link  variant="body2"
                          underline="none" color="#757575"
                          onClick={()=>{
                              dispatch(openTeacherSignUp());
                              setError(false);
                          }}
                          style={{cursor:"pointer"}}
                          >
                          {"Don't have an account? Sign Up"}
                      </Link>
                  )
              }
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    // </ThemeProvider>
  );
}