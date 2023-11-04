import { configureStore } from '@reduxjs/toolkit'
import CourseSlice from './CourseSlice'
import StudentSlice from './StudentSlice'

export default configureStore({
  reducer: {
    course: CourseSlice,
    student: StudentSlice
  }
})