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
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    filterCourses: (state) => {
      const query = state.query.toLowerCase();
      state.list = state.list.filter(course => 
        course.name.toLowerCase().includes(query)
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
