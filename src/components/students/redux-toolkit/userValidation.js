import { createSlice } from '@reduxjs/toolkit';

const validation = createSlice({
    name:'user',
    initialState : {},
    reducers:{
        setUser:(state, action)=>{
            state.data = action.payload
        }
    }
})

export const { setUser } = validation.actions;
export default validation.reducer;