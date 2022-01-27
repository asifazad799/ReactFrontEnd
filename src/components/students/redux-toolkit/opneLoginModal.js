import { createSlice } from '@reduxjs/toolkit';

const opneModalSlice = createSlice({
    name:'loginModalStatus',
    initialState : false,
    reducers:{
        opneModal:(state,action)=>{
            return true;
        },
        closeModal:(state,action)=>{
            return false;
        }
    }
});

// console.log(opneModalSlice);
export const {opneModal,closeModal} = opneModalSlice.actions;
export default opneModalSlice.reducer;