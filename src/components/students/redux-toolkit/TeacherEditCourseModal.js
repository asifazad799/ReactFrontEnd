import { createSlice } from '@reduxjs/toolkit';

const editCourseModal = createSlice({
    name:'editCourseModal',
    initialState:false,
    reducers:{
        openEditCourseModal: (state, action) => {
            return true
        },
        closeEditCourseModal: (state, action) => {
            return false
        }
    }
})

export const{ openEditCourseModal, closeEditCourseModal } = editCourseModal.actions;
export default editCourseModal.reducer;