import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled, alpha, createTheme, ThemeProvider, } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
// import SearchBar from "material-ui-search-bar";
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Teacher.css';
import Backdrop from '@mui/material/Backdrop';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 100 },
  {
    id: 'mobiile',
    label: 'Mobile',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'experience',
    label: 'Experience',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'applicationStatus',
    label: 'Application Status',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'details',
    label: 'Details',
    minWidth: 170,
    align: 'center',
  }
];

function createData(name, email, mobiile,experience, applicationStatus , details) {

  return { name, email, mobiile, experience, applicationStatus , details };
}

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: "10px",
    transition: theme.transitions.create('width'),
    width: '100%',
    backgroundColor:"#F5F5F5",
    borderRadius:"4px",
    marginTop:"20px",
    marginBottom:"20px",
    right:1,
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));




// console.log(Modal);

export default function StickyHeadTable() {
  // const [searched, setSearched] = useState("");
  const [error, setError] = useState('');
  const [apps , setApps] = useState([]);
  const [dataUpdated, setDataUpdated] = useState('')
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleToggle = () => setOpen(!open);
  var rows = []
  useEffect(()=>{
    getTeachersData()
  },[dataUpdated])

  // console.log(dataUpdated);
  let approveApp = async(appId) =>{

    // console.log(appId);
    try{
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }
      const {data} = await axios.post('/admin/approve-app',{appId:appId},config)
      // console.log(data.message);
      setDataUpdated(data.message)

    }catch(error){

      console.log(error.response.data.message);
      console.log('error approve');

    }
  }

  let rejectApp = async(appId) =>{
    // console.log(appId);
    try{
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }
      const {data} = await axios.post('/admin/reject-app',{appId:appId},config)
      // console.log(data.message);
      setDataUpdated(data.message)
    }catch(error){
      console.log(error.response.data.message);
      console.log('error reject');
    }
  }

  let getTeachersData = async () =>{
    try{
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }
      const {data}=  await axios.get('/admin/get-teacher-applications', config)
      // console.log(data.data);
      setApps(data.data)
      
      
    }catch(error){
      setError(error.response.data.message)
    }
  }
// console.log(apps);

const [AppId, setAppId] = useState('') ; 
const [aboutPreviousJob, setAboutPreviousJob] = useState('') ;
const [whyIAcademy, setWhyIAcademy] = useState('') ;


apps.map((val) => {
  rows.push(
    createData(
      val.name, val.email, val.mobile, val.experienceInTeaching,
        <> 
        {
          val.status === "pending" ? (
            <Typography key={val._id+'btn'} variant="subtitle1" sx={{color:"rgba(129, 108, 0, 1)", fontWeight:500 , padding:"10px",backgroundColor:"rgba(236, 171, 4, 0.26)", borderRadius:"4px"}} >
              pending
            </Typography>
          ) : val.status === "approved" ? (
            <Typography key={val._id+'btn'} variant="subtitle1" sx={{color:"rgba(0, 72, 34, 1)", fontWeight:500 , padding:"10px",backgroundColor:"rgba(146, 227, 169, 0.58)", borderRadius:"4px"}} >
               Approved
            </Typography>
          ) : val.status === "rejected" ? (
            <Typography key={val._id+'btn'} variant="subtitle1" sx={{color:"rgba(135, 0, 0, 1)", fontWeight:500 , padding:"10px",backgroundColor:"rgba(255, 0, 0, 0.22)", borderRadius:"4px"}} >
              Rejected
            </Typography>
          ) : ''
        }
        </>
     
        ,
      <div key={val._id}>
          <Button onClick={()=>{ handleToggle() 
              setAppId(val._id);
              setAboutPreviousJob(val.aboutPreviousJob);
              setWhyIAcademy(val.whyIAcademy)
            }} variant="outlined" sx={{p:1.26}}>Show Details</Button>
          <Backdrop
            
            sx={{ backgroundColor: 'rgba(0, 0, 0, 0.12)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <Stack gap={20} justifyContent="center" alignItems="center" sx={{width:"100%"}}>
              <Grid container sx={{display:'flex',justifyContent:"center"}}>
                <Grid item xs={10} md={8} lg={6}>
                  <div style={{backgroundColor:"white", width:"100%", height:"100%", borderRadius:"4px", border: '2px solid #9F9F9F', maxHeight:"550px",
                    overflowX:"hidden",
                    overflowY:"auto", padding:"25px", paddingBottom:"50px"}}>

                      <h2 style={{color:"#505050"}}> Application </h2>

                      <div className="a23asif" key={'lll'} style={{ backgroundColor:"#F5F5F5",  width:"100%", minHeight:"56px", maxHeight:"100%",borderRadius:"4px",marginTop:"20px", padding:"19px", textAlign:"left" }}>
                        <Typography variant="subtitle1" sx={{color:"rgba(0, 0, 0, 0.7)", fontWeight:600}} >
                          Why IAcademy ?
                        </Typography>
                        <div style={{padding:"10px", backgroundColor:"white", marginTop:"10px", borderRadius:"4px", minWidth:"50px", maxWidth:"100%"}}>
                          <Typography variant="body2" gutterBottom component="div" sx={{ color:"rgba(0, 0, 0, 0.5)"}}>
                            {whyIAcademy}
                          </Typography>
                        </div>
                      </div>

                      <div className="a23asif" key={'jj'} style={{ backgroundColor:"#F5F5F5",  width:"100%", minHeight:"56px", maxHeight:"100%",borderRadius:"4px",marginTop:"20px", padding:"19px", textAlign:"left" }}>
                        <Typography variant="subtitle1" sx={{color:"rgba(0, 0, 0, 0.7)", fontWeight:600}} >
                          About Previous Job
                        </Typography>
                        <div style={{padding:"10px", backgroundColor:"white", marginTop:"10px", borderRadius:"4px", minWidth:"50px", maxWidth:"100%"}}>
                          <Typography variant="body2" gutterBottom component="div" sx={{ color:"rgba(0, 0, 0, 0.5)"}}>
                            {aboutPreviousJob}
                          </Typography>
                        </div>
                      </div>

                      <div style={{display:'flex', justifyContent:'center'}}>
                          <Typography onClick={()=>{
                            approveApp(AppId)
                          }} variant="subtitle1" sx={{mt:4, mr:1, width:"120px", cursor:"pointer", color:"rgba(0, 72, 34, 1)", fontWeight:500 , padding:"10px",backgroundColor:"rgba(146, 227, 169, 0.58)", borderRadius:"4px"}} >
                            Approved
                          </Typography>
                          {/* <Button onClick={approveApp(()=>{console.log('asif45');})} variant="contained">Contained</Button> */}
                          <Typography onClick={()=>{
                            rejectApp(AppId)
                          }} variant="subtitle1" sx={{ mt:4, ml:1, width:"120px",color:"rgba(135, 0, 0, 1)", 
                              cursor:"pointer",fontWeight:500 , padding:"10px",backgroundColor:"rgba(255, 0, 0, 0.22)", borderRadius:"4px"}} >
                              Rejected
                          </Typography>
                      </div>
                  </div>
                </Grid>
              </Grid>
            </Stack>
          </Backdrop>
      </div>
    )
  )
})


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,background:"#F5F5F5" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

  );
}
