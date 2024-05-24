import { configureStore, createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    list: [],
    filtered: [],
    query: ''
  },
  reducers: {
    setCourses: (state, action) => {
      state.list = action.payload;
      state.filtered = action.payload;  // Initialize filtered with the full list
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    filterCourses: (state) => {
      const query = state.query.toLowerCase();
      state.filtered = state.list.filter(course => 
        course.title.toLowerCase().includes(query)
      );
    }
  }
});

export const { setCourses, setQuery, filterCourses } = coursesSlice.actions;

const store = configureStore({
  reducer: {
    courses: coursesSlice.reducer,
  },
});

export default store;
