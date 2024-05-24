import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, filterCourses } from '../store';
import dynamic from 'next/dynamic';

const CourseList = dynamic(() => import('../../course-list/src/components/CourseList'));
const CourseSearch = dynamic(() => import('../../course-search/src/components/CourseSearch'));

const Home = () => {
  const dispatch = useDispatch();
  const handleSearchSubmit = (query) => {
    dispatch(setQuery(query));
    dispatch(filterCourses());
  };


  return (
    <div>
      <CourseSearch onSearch={handleSearchSubmit} />
      <CourseList />
    </div>
  );
};

export default Home;
