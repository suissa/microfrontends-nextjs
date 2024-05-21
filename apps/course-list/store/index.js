import { configureStore, createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    list: [],
    query: ''
  },
  reducers: {
    setCourses: (state, action) => {
      state.list = action.payload;
    },
    filterCourses: (state) => {
      if (state.query) {
        state.list = state.list.filter(course =>
          course.name.toLowerCase().includes(state.query.toLowerCase())
        );
      }
    }
  }
});

export const { setCourses, filterCourses } = coursesSlice.actions;

const store = configureStore({
  reducer: {
    courses: coursesSlice.reducer,
  },
});

export default store;
