import React, {useState} from 'react';
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

function AddNewCourseModal() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const categories = ["Node js", "Python"];
    const language = ["English", "Hindi"]; 

    const [image, setImage] = useState(null)
    const [src, setSrc] = useState(null)
    const [crop, setCrop] = useState({ aspect: 16 / 9 });
    const [result, setResult] = useState(null);
    const [fileError, setFileError] = useState(false)
    const [loading, setLoading] = useState('');
    const [blob, setBlob] = useState(null);
    const teacher = useSelector(state => state.teacher);
    
    let addNewFrom = async (data1) => {
        try{
            const config = {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            }
            const formData = new FormData();
            formData.append("thumbnail",blob);
            formData.append("title",data1.title)
            formData.append("category",data1.category)
            formData.append("language",data1.language)
            formData.append("description",data1.description)
            formData.append("teacher",teacher?.data?.user._id)
            setLoading(true)
            // console.log(data1);
            const {data} = await axios.post('/teacher/add-new-course', formData, config)
            setLoading(false)
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
          maxHeight:"530px",
          overflowX:"hidden",
          overflowY:"auto"
        }}>
        <Typography variant="h5" sx={{fontWeight:500, color:"#5F5F5F", pb:3, textAlign:'center'}} gutterBottom component="div">
            Add New Course
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
                    if(result){
                        console.log('file ok');
                        setFileError(false)
                        // console.log(result);
                    }else{
                        console.log('not file found');
                        setFileError(true)
                    }
                }}
              >
                Add
              </Button>
            </Grid>
            </Grid>
    </Box>
  );
}

export default AddNewCourseModal;