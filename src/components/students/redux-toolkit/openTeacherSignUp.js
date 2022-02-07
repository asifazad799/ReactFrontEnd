import { createSlice } from '@reduxjs/toolkit';

const opneTeacherSignUpSlice = createSlice({
    name:'TeacherSignUpModalStatus',
    initialState : false,
    reducers:{
        openTeacherSignUp:(state,action)=>{
            return true;
        },
        closeTeacherSignUp:(state,action)=>{
            return false;
        }
    }
});

// console.log(opneModalSlice);
export const { openTeacherSignUp, closeTeacherSignUp } = opneTeacherSignUpSlice.actions;
export default opneTeacherSignUpSlice.reducer;