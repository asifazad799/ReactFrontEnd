import { createSlice } from '@reduxjs/toolkit';

const validationTeacher = createSlice({
    name:'teacher',
    initialState : {},
    reducers:{
        setTeacher : (state, action) => {
            state.data = action.payload
        }
    }
})

export const { setTeacher } = validationTeacher.actions;
export default validationTeacher.reducer;