import { configureStore } from '@reduxjs/toolkit';
import opneModalSlice from './opneLoginModal';
import opneSignUpSlice from './openSignUp';
import validation from './userValidation';
import validationTeacher from './teacherValidation';
import opneTeacherModalSlice from './opneTeacherLoginModal';
import techerSignUpSlice from './openTeacherSignUp';
import adminValidation from './adminValidation';
import TeacherSideNav from './TeacherSideNav';
import TeacherCourseDetails from './TeacherCourseDetail';
import TeacherAddNewCourse from './TeacherAddNewCourseModal';
import TeacherEditCourse from './TeacherEditCourseModal'

const store = configureStore({
    reducer: {
        modal: opneModalSlice,
        signUp: opneSignUpSlice,
        user: validation,
        teacher: validationTeacher,
        TeacherModal: opneTeacherModalSlice,
        TeacherSignUpModalStatus: techerSignUpSlice,
        admin: adminValidation,
        tacherSideNav: TeacherSideNav,
        teacherCourseId: TeacherCourseDetails,
        addNewCourseModal: TeacherAddNewCourse,
        editCourseModal: TeacherEditCourse      
    } 
});
export default store; 