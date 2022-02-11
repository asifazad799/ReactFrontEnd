import React, {useState,useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import axios from 'axios';
import getCroppedImg from '../util/cropImageFuntion';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeAddNewCourseModal } from '../redux-toolkit/TeacherAddNewCourseModal'
import CircularProgress from '@mui/material/CircularProgress';
import { closeEditCourseModal } from '../redux-toolkit/TeacherEditCourseModal'


function AddNewCourseModal(props) {

    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const categories = ["Node js", "Python"];
    const language = ["English", "Hindi"]; 

    const [image, setImage] = useState(null)
    const [src, setSrc] = useState(null)
    const [crop, setCrop] = useState({ aspect: 16 / 9 });
    const [result, setResult] = useState(null);
    const [fileError, setFileError] = useState(false)
    const [loading, setLoading] = useState(false); 
    const [blob, setBlob] = useState(null);
    const teacher = useSelector(state => state.teacher);
    const modalState = useSelector(state => state.addNewCourseModal)
    // console.log(modalState);
    
    
    let addNewFrom = async (data1) => {
        try{
            const config = {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            }
            
            // setLoading(true)
            // console.log(data1);
            if(props.edit){
                const formData = new FormData();
                if(blob){
                    formData.append("thumbnail",blob);
                }else{
                    formData.append("thumbnail",props.data.thumbnial);
                }
                formData.append("title",data1.title)
                formData.append("category",data1.category)
                formData.append("language",data1.language)
                formData.append("description",data1.description)
                formData.append("teacher",teacher?.data?.user._id)
                formData.append("courseId",props?.data?._id)
                const {data} = await axios.post('/teacher/edit-course', formData, config)
                // console.log(data);
                dispatch(closeEditCourseModal())
                Navigate(`/teacher/course-details/${props?.data?._id}`)
            }else{
                const formData = new FormData();
                formData.append("thumbnail",blob);
                formData.append("title",data1.title)
                formData.append("category",data1.category)
                formData.append("language",data1.language)
                formData.append("description",data1.description)
                formData.append("teacher",teacher?.data?.user._id)
                const {data} = await axios.post('/teacher/add-new-course', formData, config)
                dispatch(closeAddNewCourseModal())
            }
            // setLoading(false)
        }catch(error){
            console.log(error.response.data.message);
        }
    }

    return (
    <Box container component="form" onSubmit={handleSubmit((e)=>{
            // console.log(e);
            if(fileError){
                console.log('Error');
            }else{
                console.log('No error');
                addNewFrom(e)
            }
        })} noValidate 
          sx={{ 
          mt: 1 ,
          width:"100%",
          textAlign:"justify",
          maxHeight:"570px",
          overflowX:"hidden",
          overflowY:"auto"
        }}>
        <Typography variant="h5" sx={{fontWeight:500, color:"#5F5F5F", pb:3, textAlign:'center'}} gutterBottom component="div">
            { props.edit? `Edit Course` : `Add New Course` }
        </Typography>
            <Grid item xs={12} sm={12} md={12} sx={{p:4}}>
                { src &&
                    <><div style={{display:"flex", justifyContent:"center", width:"100%"}}>
                        
                        <ReactCrop style={{width:"550px"}} onImageLoaded={setImage} src={src} crop={crop} onChange={newCrop => setCrop(newCrop)}/>
                        
                    </div>
                    <div style={{display:"flex", justifyContent:"center", width:"100%", marginTop:"20px"}}>
                    <Button
                        variant="contained"
                        sx={{
                        height: '37px',
                        pt: 1.2,
                        backgroundColor: '#57C28A',
                        }}
                        onClick={async()=>{
                            let corpedData = await getCroppedImg(image, crop)
                            corpedData.blob.then((data)=>{
                                console.log(data);
                                setBlob(data)
                            })
                            setResult(corpedData.base) 
                            setSrc(null)
                        }}>
                        Crop
                    </Button>
                    </div></>
                }
                { result &&
                    <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
                        <img style={{width:"550px"}}  src={result} alt="Cropped"/>
                    </div>
                }
                { props.edit && !src && !result &&
                    <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
                        <img style={{width:"550px"}}  src={props?.data?.thumbnial} alt="Cropped"/>
                    </div> 
                }
            </Grid>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                    type = "file"
                    accept = 'image/*'
                    onChange={e => {
                        setSrc(URL.createObjectURL(e.target.files[0]))
                        setResult(null);
                    }}
                    autoComplete="given-name"
                    name="thumbnail"
                    required
                    fullWidth
                    id="thumbnail"
                    autoFocus
                    error={fileError}
                    helperText={fileError ? "This field can't be empty" : ""}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                    defaultValue = {props?.data?.title}
                    autoComplete="given-name"
                    name="title"
                    required
                    fullWidth
                    id="title"
                    label="Curse Title"
                    autoFocus
                    {...register("title",
                        {   
                        required:"This field can't be empty",
                        minLength:{
                            value:6,
                            message:"Minimun 6 charecters"
                            }
                        }
                    )}
                    error={errors.title}
                    helperText={ errors.title ?  errors.title.message : ""}
                />
            </Grid>
            <Grid item xs = {12} sm={6}>
            <Autocomplete
                defaultValue = {props?.data?.category}
                disablePortal
                id="combo-box-demo"
                options={categories}
                fullWidth
                renderInput={(params) => <TextField {...params} 
                    label="Categories" 
                    id="category"
                    {...register("category",
                        {   
                            required:"This field can't be empty"
                        }
                    )}
                    error={errors.category}
                    helperText={ errors.category ?  errors.category.message : ""}
                />}
            />
            </Grid>
            <Grid item xs = {12} sm={6}>
                <Autocomplete
                    defaultValue = {props?.data?.language}
                    disablePortal
                    id="combo-box-demo"
                    options={language}
                    fullWidth
                    renderInput={(params) => 
                        <TextField {...params} 
                        label="Language" 
                        id="language"
                        {...register("language",
                            {   
                            required:"This field can't be empty"
                            
                            }
                        )}
                        error={errors.language}
                        helperText={ errors.language ?  errors.language.message : ""}
                    />
                    }
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                    <TextField
                        defaultValue = {props?.data?.description}
                        margin="normal"
                        required
                        fullWidth
                        name="description"
                        label="Course Description"
                        id="description"
                        autoComplete="description"
                        multiline
                        rows={4}
                        {...register("description",
                        {   
                            required:"This field can't be empty",
                            minLength:{
                                value:4,
                                message:"Minimun 4 charecters"
                                }
                            }
                        )}
                        error={errors.description}
                        helperText={ errors.description ?  errors.description.message : ""}
                    />
            </Grid>
           
            <Grid item xs={12} sx={{display:"flex", justifyContent:"center", mt:3.5, mb:3}}>
                <Box sx={{ m: 1, position: 'relative' }}>
                    <Button
                        variant="contained"
                        className="Login"
                        type="sumbit"
                        sx={{
                        height: '37px',
                        pt: 1.2,
                        backgroundColor: '#57C28A',
                        }}
                        onClick={() => {
                            
                            if(props.edit){
                                setFileError(false)
                            }else{
                                if(result){
                                    console.log('file ok');
                                    setFileError(false)
                                }else{
                                    console.log('not file found');
                                    setFileError(true)
                                }
                            }
                        }}
                        disabled={loading}
                    >
                        Add
                    </Button>
                    {/* {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                            color: "green",
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginTop: '-12px',
                            marginLeft: '-12px',
                            }}
                        />
                    )}  */}
                </Box>
            </Grid>
            </Grid>
    </Box>
  );
}

export default AddNewCourseModal;