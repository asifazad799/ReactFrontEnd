import { createSlice } from '@reduxjs/toolkit';

const opneTeacherModalSlice = createSlice({
    name:'TeacherModal',
    initialState : false,
    reducers:{
        opneTeacherModal:(state,action)=>{
            return true;
        },
        closeTeacherModal:(state,action)=>{
            return false;
        }
    }
});

// console.log(opneModalSlice);
export const {opneTeacherModal,closeTeacherModal} = opneTeacherModalSlice.actions;
export default opneTeacherModalSlice.reducer;