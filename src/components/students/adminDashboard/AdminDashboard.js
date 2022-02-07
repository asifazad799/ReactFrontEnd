
import * as React from 'react';
import { styled, createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Logo from '../asset/logo.jpg';
import AdminProfileIcon from '../adminMainPage/AdminProfileNav'

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      backgroundColor:"#F5F5F5",
      border:"none",
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(8),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent(props) {

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
 console.log(props);
  return (
    <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex',backgroundColor:"white" }}>
          <CssBaseline />
          <AppBar elevation={0} position="fixed" open={open} style={{backgroundColor:"white"}}>
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon sx={{color:"black"}}/>
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                <div
                  style={{
                      display:'flex',
                      justifyContent: 'space-between',
                      width:"100px"
                  }}>
                       
                  {
                    !open && <><div><img src={Logo} style={{width:"37px"}} alt="Logo"></img></div>
                              <Typography variant="subtitle1" sx={{mt:1.3, ml:1, color:"black"}} >
                                IAcademy
                              </Typography></>
                  }
                  
                  
                </div>
              </Typography>
              
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon sx={{color:"black",fontSize:"33px"}} />
                </Badge>
              </IconButton>
              <AdminProfileIcon height={26} width={26}/>
              
                
              {/* </IconButton> */}
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open} sx={{border:"none"}}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                backgroundColor:"white",
                border:"none"
              }}
            >
              {
                open && <>
                          <div><img src={Logo} style={{width:"37px", marginRight:"0px"}} alt="Logo"></img></div>
                          <Typography variant="subtitle1" sx={{mt:.9, ml:1.4, color:"black", marginRight:"70px"}} >
                            IAcademy
                          </Typography>
                        </>
              }
             
              <IconButton onClick={toggleDrawer} sx={{mr:-3}}>
                <ChevronLeftIcon  />
              </IconButton>
            </Toolbar>
            
            {/* <Divider  /> */}
            <List>{mainListItems}</List>
          </Drawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Paper elevation={0} sx={{p:5, backgroundColor:"#F5F5F5"}}>
              <Typography color="inherit" variant="h5"
                   sx={{mt:-2.5,pb:3, color:"black", mr:"20px", fontWeight:500}} >
                    { props.title }
                  </Typography>
                {
                  props.children
                }
              </Paper>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
  );
}
export default DashboardContent