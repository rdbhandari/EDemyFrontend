import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async ({ currentPage, limit, query}) => {
    let data = {};
    let url = `http://localhost:3000/courses?_page=${currentPage}&_limit=${limit}&${query}`;
    await axios
      .get(url)
      .then((response) => {
        data = {'totalCount':parseInt(response.headers['x-total-count']), 'data':response.data};
      })
      .catch((error) => {
        console.log(error)
      });
    return data;
  }
);

export const CourseSlice = createSlice({
  name: 'course',
  initialState: {
    courses: {},
    totalCount: 0,
    isLoading: true,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload.data;
        state.totalCount = action.payload.totalCount;
        state.isLoading = false;
      })
      .addCase(fetchCourses.rejected, (action) => {});
  },
})

export default CourseSlice.reducer