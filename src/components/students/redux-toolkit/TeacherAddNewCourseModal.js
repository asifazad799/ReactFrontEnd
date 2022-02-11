import { createSlice } from '@reduxjs/toolkit';

const addNewCourseModal = createSlice({
    name:'addNewCourseModal',
    initialState:false,
    reducers:{
        openAddNewCourseModal: (state, action) => {
            return true
        },
        closeAddNewCourseModal: (state, action) => {
            return false
        }
    }
})

export const{ openAddNewCourseModal, closeAddNewCourseModal } = addNewCourseModal.actions;
export default addNewCourseModal.reducer;