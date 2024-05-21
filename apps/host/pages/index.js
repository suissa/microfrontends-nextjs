import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, filterCourses } from '../store';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const CourseList = dynamic(() => import('../../course-list/src/components/CourseList'));
const CourseSearch = dynamic(() => import('../../course-search/src/components/CourseSearch'));

const Home = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.list);

  const handleSearchSubmit = (query) => {
    dispatch(setQuery(query));
    dispatch(filterCourses());
  };

  return (
    <div>
      <h1>Microfrontends Next.js</h1>
      <CourseSearch onSearch={handleSearchSubmit} />
      <CourseList initialCourses={courses} />
    </div>
  );
};

export default Home;
