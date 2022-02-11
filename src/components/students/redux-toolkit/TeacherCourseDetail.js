import  { createSlice } from '@reduxjs/toolkit';

const courseDetailsAsif = createSlice({
    name: 'teacherCourseId',
    initialState: {},
    reducers: {
        setCourseIdAsif:(state, action) => {
            state.data = action.payload
        }
    }
})

export const { setCourseIdAsif } = courseDetailsAsif.actions;
export default courseDetailsAsif.reducer;