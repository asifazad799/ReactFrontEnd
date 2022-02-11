import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import UpdateIcon from '@mui/icons-material/Update';
import LanguageIcon from '@mui/icons-material/Language';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EditIcon from '@mui/icons-material/Edit';
import EditModal from '../TeacherCourses/AddNewCourseModal';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DelteModal from './DeleteModal';
import { useSelector, useDispatch } from 'react-redux';
import { closeEditCourseModal, openEditCourseModal } from '../redux-toolkit/TeacherEditCourseModal'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 750,
    bgcolor: 'background.paper',
    borderRadius: "4px",
    boxShadow: 24,
    p: 4,
};

function CourseDetailsBodyTop(props) {

    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openDelete, setOpenDelete] = useState(false);
    const ModalStatus = useSelector(state => state.editCourseModal)


    props.data.date = props.data.date.toString().split('T')[0];
    if (props.data.update) {
        props.data.update = props.data.update.toString().split('T')[0];
    }
    return (
        <div style={{ display: 'flex', justifyContent: "center", width: "100%", backgroundColor: "#F5F5F5", borderRadius: "4px" }}>
            <Grid container spacing={1.4} sx={{ p: 1.4 }}>
                <Grid item xs={12} sm={7} md={7} lg={5.2} sx={{ p: 0, display: "flex", justifyContent: 'center' }}>
                    <img src={props.data.thumbnial} style={{ width: "384px", height: "216px", overflow: 'hidden', objectFit: 'contain', marginTop: '0px' }} alt="Img" />
                </Grid>
                <Grid item xs={12} sm={5} md={5} lg={5.1} sx={{ p: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'left' }}>
                        <Typography variant="body1" gutterBottom sx={{ fontWeight: 600, py: .7, borderRadius: '4px', backgroundColor: "white", px: 2 }}>
                            {props.data.language}
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{ fontWeight: 600, py: .7, borderRadius: '4px', backgroundColor: "white", px: 2, ml: 1.5 }}>
                            {props.data.category}
                        </Typography>
                    </div>
                    <div style={{ width: "100%", marginTop: "6px", borderRadius: "4px", padding: "6px" }}>
                        <Typography variant="body1" sx={{ mt: 0, color: 'rgba(0, 0, 0, 0.7)', fontWeight: 600 }}>
                            {props.data.title}
                        </Typography>
                    </div>
                    <div style={{ width: "80%", marginTop: "6px", borderRadius: "4px", padding: "6px" }}>
                        <Typography variant="body1" sx={{ mt: 0, color: 'rgba(0, 0, 0, 0.7)', fontWeight: 400, fontSize: '13px' }}>
                            {props.data.description}
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={9} sm={12} md={10} lg={1.7}>
                    <Grid container spacing={1.5} >
                        <Grid item xs={6} sm={3} md={3} lg={12} >
                            <div style={{
                                display: 'flex', justifyContent: 'space-between',
                                width: "110px", height: "38px", backgroundColor: "white", paddingBottom: "9px",
                                borderRadius: "4px", paddingTop: '4px', paddingLeft: '4px', paddingRight: '4px'
                            }}>
                                <div style={{ lineHeight: "61px", paddingLeft: "5px" }}>
                                    <DateRangeIcon sx={{ color: "#EBB376", height: "28px", width: "28px" }} />
                                </div>
                                <div style={{ paddingRight: "5px", paddingTop: "4px" }} >
                                    <Typography variant="body1" sx={{ fontSize: '12px', fontWeight: 600 }}>
                                        Posted On
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: '12px', fontWeight: 400 }}>
                                        {props.data.date}
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={3} md={3} lg={12}  >
                            <div style={{
                                display: 'flex', justifyContent: 'space-between',
                                width: "110px", height: "38px", backgroundColor: "white", paddingBottom: "9px",
                                borderRadius: "4px", paddingTop: '4px', paddingLeft: '4px', paddingRight: '4px'
                            }}>
                                <div style={{ lineHeight: "61px", paddingLeft: "2px" }}>
                                    <UpdateIcon sx={{ color: "#57C28A", height: "28px", width: "28px" }} />
                                </div>
                                <div style={{ paddingRight: "5px", paddingTop: "4px" }} >
                                    <Typography variant="body1" sx={{ fontSize: '12px', fontWeight: 600 }}>
                                        updated On
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: '12px', fontWeight: 400 }}>
                                        {
                                            props.data.update ? props.data.update : 'None'
                                        }
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={3} md={3} lg={12}  >
                            <div style={{
                                display: 'flex', justifyContent: 'space-between',
                                width: "110px", height: "38px", backgroundColor: "white", paddingBottom: "10px",
                                borderRadius: "4px", paddingTop: '4px', paddingLeft: '4px', paddingRight: '4px'
                            }}>
                                <div style={{ lineHeight: "62px", paddingLeft: "5px" }}>
                                    <LanguageIcon sx={{ color: "#0400AF", height: "28px", width: "28px" }} />
                                </div>
                                <div style={{ paddingRight: "16px", paddingTop: "4px" }} >
                                    <Typography variant="body1" sx={{ fontSize: '12px', fontWeight: 600 }}>
                                        Language
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: '12px', fontWeight: 400 }}>
                                        {props.data.language}
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        {
                            props.teacher ? (
                                <Grid item xs={6} sm={3} md={3} lg={12}  >
                                    <div style={{
                                        display: 'flex', justifyContent: 'space-between',
                                        width: "110px", height: "38px", backgroundColor: "white", paddingBottom: "10px",
                                        borderRadius: "4px", paddingTop: '4px', paddingLeft: '4px', paddingRight: '4px'
                                    }}
                                    >
                                        <div style={{ lineHeight: "58px", paddingLeft: "18px" }} onClick={() => {
                                            handleOpen()
                                            dispatch(openEditCourseModal())
                                            setOpenDelete(false)
                                        }}>
                                            <EditIcon sx={{ height: "24px", width: "24px", color: "blue", cursor: "pointer" }} />
                                        </div>
                                        <div style={{ lineHeight: "58px", paddingLeft: "5px", paddingRight: "15px" }}>
                                            <DeleteOutlineIcon sx={{ cursor: "pointer", height: "24px", width: "24px", color: 'red' }}
                                                onClick={() => {
                                                    setOpenDelete(true)
                                                    dispatch(openEditCourseModal())
                                                    handleOpen()
                                                }}
                                            />
                                        </div>
                                    </div>
                                </Grid>
                            ) : ''
                        }
                    </Grid>
                </Grid>
            </Grid>
            <Modal
                open={ModalStatus}
                onClose={() => dispatch(closeEditCourseModal())}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Grid item sx={style} xs={12} sm={12}>
                        {
                            !openDelete ?
                                <EditModal data={props.data} edit={true} /> :
                                <DelteModal />
                        }

                    </Grid>
                </Box>
            </Modal>
        </div>
    )
}

export default CourseDetailsBodyTop;