import { createSlice } from '@reduxjs/toolkit';

const SideNavStatus = createSlice({
    name:'tacherSideNav',
    initialState : false,
    reducers:{
        setSideNavOpen : (state, action) => {
            return true
        },
        setSideNavClose : (state, action) => {
            return false
        }
    }
})

export const { setSideNavOpen, setSideNavClose } = SideNavStatus.actions;
export default SideNavStatus.reducer;