import React from 'react';
import Grid from '@mui/material/Grid';

function AdminDashboardBody() {
  return (
    <Grid container xs={12} >
    
        <Grid item xs={12} md={6} lg={3}
        sx={{
            p:7,
            backgroundColor:"blue"
        }}>
        
        </Grid>
        <Grid item xs={12} md={6} lg={3}
        sx={{
            p:7,
            backgroundColor:"green"
        }}>
        
        </Grid>
        <Grid item xs={12} md={6} lg={3}
        sx={{
            p:7,
            backgroundColor:"red"
        }}>
        
        </Grid>
        <Grid item xs={12} md={6} lg={3}
        sx={{
            p:7,
            backgroundColor:"yellow"
        }}>
        
        </Grid>
  </Grid>
  );
}

export default AdminDashboardBody;
