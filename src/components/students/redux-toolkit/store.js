import { configureStore } from '@reduxjs/toolkit';
import opneModalSlice from './opneLoginModal';
import opneSignUpSlice from './openSignUp';
import validation from './userValidation';
import validationTeacher from './teacherValidation';
import opneTeacherModalSlice from './opneTeacherLoginModal';
import techerSignUpSlice from './openTeacherSignUp';
import adminValidation from './adminValidation';
import TeacherSideNav from './TeacherSideNav'

const store = configureStore({
    reducer:{
        modal: opneModalSlice,
        signUp: opneSignUpSlice,
        user: validation,
        teacher: validationTeacher,
        TeacherModal: opneTeacherModalSlice,
        TeacherSignUpModalStatus: techerSignUpSlice,
        admin: adminValidation,
        tacherSideNav:TeacherSideNav
    }
});

export default store; 