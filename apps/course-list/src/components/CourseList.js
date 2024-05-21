import React from 'react';
import { useSelector } from 'react-redux';

const CourseList = () => {
  const courses = useSelector(state => state.courses.list);

  return (
    <div>
      <h1>Lista de Cursos</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
