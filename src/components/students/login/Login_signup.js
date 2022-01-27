import React, { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogInIcon from '../asset/Login.svg';
import { useSelector,useDispatch } from 'react-redux';
import signUpIcon from '../asset/signup.svg';
import { useForm } from "react-hook-form";
import {openSignUp,closeSignUp} from '../redux-toolkit/openSignUp';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import {Routes,Route ,useNavigate} from 'react-router-dom';
import { setUser } from '../redux-toolkit/userValidation';
import {opneModal,closeModal} from '../redux-toolkit/opneLoginModal';



// const theme = createTheme();

export default function SignIn() {
    const Navigate = useNavigate();
    const signUp = useSelector((state)=>{
        return state.signUp;
    });
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let password = useRef({});
    password.current = watch("password", "");
    const [loading,setLoading] = useState('');
    const [error,setError] = useState('');
    const [info,setInfo] = useState(false);
    

        const signUpApi = async(suData)=>{
            // console.log(data);
            setError(false)
            try{
                const config = {
                    headers:{
                      "Content-type":"application/json"
                    }
                }
                setLoading(true);
                const{data} = await axios.post(
                    "/user/signup",suData,
                    config
                );
                setLoading(false);
                // console.log(data);
                setInfo(true);
                dispatch(closeSignUp());
            }catch(error){
                setError(error.response.data.message);
                // console.log(error.response.data.message);
                setLoading(false);
            }
        }

   

        const logInApi = async(loData) =>{
        
            // console.log('hai login');
            setError(false)
            try{
                const config = {
                    headers:{
                      "Content-type":"application/json"
                    }
                }
                setLoading(true);
                const{data} = await axios.post(
                    "/user/login",loData,
                    config
                );
                localStorage.setItem('userInfo',JSON.stringify(data));
                setLoading(false);
                dispatch(setUser(data))
                Navigate('/home')
                dispatch(closeModal())
                // console.log(data);
            }catch(error){
                setError(error.response.data.message);
                // console.log(error.response.data.message);
                setLoading(false);
            }

        }
    

    return (
        // <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 2,
                    pb:4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
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

            { loading && <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p:3}}><CircularProgress color="success"/></Box>}

            { error?  <Grid item xs={12}  style={{color:'red',fontSize:"14px"}}><Alert severity="error">
                <AlertTitle>{error}</AlertTitle>
                    Check the entered <strong> email or password </strong>
                </Alert></Grid>:''
            }
            { info?  <Grid item xs={12}  style={{color:'red',fontSize:"14px"}}><Alert severity="info">
                
                    Now login with your <strong>email and password</strong>
                </Alert></Grid>:''
            }
            
            <Box component="form" onSubmit={handleSubmit((e)=>{
                    // console.log(e);
                    signUp ? signUpApi(e) : logInApi(e) ;
                    // signUpApi(e);
                })} noValidate sx={{ mt: 1 }}>
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
                {
                    signUp ? (
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            autoComplete="current-password"
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
                    ):(
                        <Grid item xs>
                            <Link href="#" variant="body2"  underline="none" color="#757575">
                                Forgot password?
                            </Link>
                        </Grid>
                    )
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
                                    dispatch(closeSignUp());
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
                                    dispatch(openSignUp());
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
