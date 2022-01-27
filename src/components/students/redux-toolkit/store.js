import { configureStore } from '@reduxjs/toolkit';
import opneModalSlice from './opneLoginModal';
import opneSignUpSlice from './openSignUp';
import validation from './userValidation';

const store = configureStore({
    reducer:{
        modal:opneModalSlice,
        signUp:opneSignUpSlice,
        user:validation
    }
});

export default store; 