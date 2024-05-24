import { configureStore, createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    list: [],
    query: ''
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    filterCourses: (state) => {
      if (state.query) {
        state.list = state.list.filter(course =>
          course.title.toLowerCase().includes(state.query.toLowerCase())
        );
      }
    },
    setCourses: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setQuery, filterCourses, setCourses } = coursesSlice.actions;

const store = configureStore({
  reducer: {
    courses: coursesSlice.reducer,
  },
});

export default store;
