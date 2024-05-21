import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCourses = [
  { id: 1, name: 'Curso 1' },
  { id: 2, name: 'Curso 2' },
  { id: 3, name: 'Curso 3' },
  { id: 4, name: 'aaaa' },
  { id: 5, name: 'bbbb' },
  { id: 6, name: 'cccc' },
];

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    list: initialCourses,
    query: '',
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    filterCourses: (state) => {
      const { query } = state;
      state.list = query
        ? initialCourses.filter(course =>
            course.name.toLowerCase().includes(query.toLowerCase())
          )
        : initialCourses;
    },
    setCourses: (state, action) => {
      state.list = action.payload;
    },
    resetCourses: (state) => {
      state.list = initialCourses;
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
