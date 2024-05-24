import { configureStore, createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    list: [],
    query: '',
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    filterCourses: (state) => {
      const { query, list } = state;
      state.filtered = query
        ? list.filter(course =>
            course.title.toLowerCase().includes(query.toLowerCase())
          )
        : list;
    },
    setCourses: (state, action) => {
      state.list = action.payload;
      state.filtered = action.payload; // Inicializar a lista filtrada com todos os cursos
    },
    resetCourses: (state) => {
      state.filtered = state.list;
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
