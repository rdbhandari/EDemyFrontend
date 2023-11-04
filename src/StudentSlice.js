import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudentDetails = createAsyncThunk(
  "student/fetchStudentDetails",
  async ({currentPage, limit, studentId}) => {
    let student = await axios
    .get(`http://localhost:3000/students?id=${studentId}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
    let studentCourses = await axios
    .get(`http://localhost:3000/courses?_page=${currentPage}&_limit=${limit}&students_like=\\b${studentId}\\b`)
    .then((response) => response)
    .catch((error) => console.log(error));
    

    return {'student':student, 'studentCourses':{'totalCount':parseInt(studentCourses.headers['x-total-count']), 'courses' :studentCourses.data}};
  }
);


export const StudentSlice = createSlice({
  name: 'student',
  initialState: {
    studentDeatils:{},
    studentCourses: {},
    totalCount: 0,
    isLoading: true,
  },
  extraReducers: (builder) => {
      builder.addCase(fetchStudentDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStudentDetails.fulfilled, (state, action) => {
        state.studentDeatils = action.payload.student[0]
        state.studentCourses = action.payload.studentCourses.courses
        state.totalCount = action.payload.studentCourses.totalCount
        state.isLoading = false;
      })
      .addCase(fetchStudentDetails.rejected, (state, action) => {})
  },
})

export default StudentSlice.reducer