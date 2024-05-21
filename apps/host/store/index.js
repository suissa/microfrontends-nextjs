import { configureStore, createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    list: [
      { id: 1, name: 'Curso 1' },
      { id: 2, name: 'Curso 2' },
      { id: 3, name: 'Curso 3' },
      { id: 4, name: 'aaaa' },
      { id: 5, name: 'bbbb' },
      { id: 6, name: 'cccc' },
    ],
    query: ''
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    filterCourses: (state) => {
      if (state.query) {
        state.list = state.list.filter(course =>
          course.name.toLowerCase().includes(state.query.toLowerCase())
        );
      }
    },
    setCourses: (state, action) => {
      state.list = action.payload;
    },
    resetCourses: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setQuery, filterCourses, setCourses, resetCourses } = coursesSlice.actions;

const store = configureStore({
  reducer: {
    courses: coursesSlice.reducer,
  },
});

export default store;
