import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LogInIcon from '../asset/Login.svg'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import CircularProgress from '@mui/material/CircularProgress'
import { useNavigate } from 'react-router-dom'
import { setAdmin } from '../redux-toolkit/adminValidation'
import { useDispatch } from 'react-redux'


export default function SignIn() {
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const data = new FormData(event.currentTarget)
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   })
  // }
  const Dispatch = useDispatch()
  const Navigate = useNavigate()
  const loginApi = async(AdminLoginData) => {
    setError(false)
    try{
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }
      setLoading(true)
      const{data} = await axios.post('/admin/login', AdminLoginData, config)
      localStorage.setItem('adminInfo', JSON.stringify(data))
      Dispatch(setAdmin(data))
      setLoading(false)
      Navigate('/admin/dashboard')
    }catch(error){
      setError(error.response.data.message)
      setLoading(false)
    }
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [loading, setLoading] = useState('')
  const [error, setError] = useState('')

  return (
    // <ThemeProvider theme={theme}>
    //   <Container component="main" maxWidth="xs">
    // <CssBaseline />
    // <Grid sm={12} md={6}>
    <Box
      sx={{
        marginTop: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '70%',
        marginBottom: '50px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '4px',
        pt: 4,
      }}
    >
      <img
        src={LogInIcon}
        style={{
          width: '28px',
          marginBottom: '10px',
        }}
        alt="LogInIcon"
      />
      <Typography
        component="h1"
        variant="h5"
        sx={{ fontWeight: 600, color: '#505050' }}
      >
        Log in
      </Typography>
      {loading && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 3,
            }}
          >
            <CircularProgress color="success" />
          </Box>
      )}
      {error ? (
          <Grid item xs={12} style={{ color: 'red', fontSize: '14px' }}>
            <Alert severity="error">
              <AlertTitle>{error}</AlertTitle>
              Check the entered <strong> email or password </strong>
            </Alert>
          </Grid>
        ) : (
          ''
      )}
      <Box component="form" onSubmit={handleSubmit((e)=>{
        loginApi(e)
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
          {...register('email', {
            required: "This field can't be empty",
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Enter a valid email',
            },
          })}
          error = {errors.email}
          helperText = {errors.email ? errors.email.message : ''}
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
          {...register('password', {
            required: "This field can't be empty",
            minLength: {
              value: 6,
              message: 'Minimun 6 charecters',
            },
          })}
          error={errors.password}
          helperText={errors.password ? errors.password.message : ''}
        />
        <Box
          sx={{
            marginTop: 2,
            pb: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button
            variant="contained"
            className="Login"
            type="sumbit"
            sx={{
              height: '37px',
              pt: 1.2,
              backgroundColor: '#57C28A',
            }}
          >
            Log in
          </Button>
        </Box>
      </Box>
    </Box>
    // </Grid>
    //   </Container>
    // </ThemeProvider>
  )
}
