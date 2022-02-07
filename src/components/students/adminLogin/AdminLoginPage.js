import React from 'react'
import adminBanner from '../asset/Admin-amico.svg'
import Login from './logIn'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

function AdminLoginPage() {
  return (
    // <div
    //   style={{

    //   }}
    // >

    //   <div
    //     style={{

    //     }}
    //   >
    <Box
      container
      sx={{
        display: 'flex',
        marginTop: '30px',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        mb: 8,
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: '#F5F5F5',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          borderRadius: '4px',
          height: '100%',
        }}
      >
        <Grid item xs={12} md={6}>
          <div
            style={{
              height: '100%',
              display: 'flex',
              width: '100%',
              paddingTop: '20px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={adminBanner}
              style={{
                paddingTop: '0px',
                paddingBottom: '0px',
                width: '360px',
              }}
              alt="adminBanner"
            ></img>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Login/>
        </Grid>
      </Grid>
    </Box>
    //    </div>
    //  </div>
  )
}

export default AdminLoginPage
