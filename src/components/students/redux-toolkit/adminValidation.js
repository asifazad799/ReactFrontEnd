import { createSlice } from '@reduxjs/toolkit';

const adminValidation = createSlice({
    name:"admin",
    initialState:{},
    reducers:{
        setAdmin : (state, action)=>{
            state.data = action.payload
        }
    }
})

export const { setAdmin } = adminValidation.actions
export default adminValidation.reducer 