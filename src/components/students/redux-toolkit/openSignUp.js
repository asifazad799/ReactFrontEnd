import { createSlice } from '@reduxjs/toolkit';

const opneSignUpSlice = createSlice({
    name:'loginModalStatus',
    initialState : false,
    reducers:{
        openSignUp:(state,action)=>{
            return true;
        },
        closeSignUp:(state,action)=>{
            return false;
        }
    }
});

// console.log(opneModalSlice);
export const {openSignUp,closeSignUp} = opneSignUpSlice.actions;
export default opneSignUpSlice.reducer;