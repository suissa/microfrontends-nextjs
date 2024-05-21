import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCourses, filterCourses } from '../../store';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.list);

  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.data.type === 'SET_COURSES') {
        dispatch(setCourses(event.data.courses));
      }
      if (event.data.type === 'FILTER_COURSES') {
        dispatch(filterCourses());
      }
    });
  }, [dispatch]);

  return (
    <div>
      <h1>Lista de Cursos component</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
