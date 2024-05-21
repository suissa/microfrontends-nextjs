import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCourses, filterCourses } from '../store';

const CourseList = ({ initialCourses }) => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.list);

  useEffect(() => {
    dispatch(setCourses(initialCourses));
    dispatch(filterCourses());
  }, [dispatch, initialCourses]);

  return (
    <div>
      <h1>Lista de Cursosss</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const initialCourses = [
    { id: 1, name: 'Curso 1' },
    { id: 2, name: 'Curso 2' },
    { id: 3, name: 'Curso 3' },
    { id: 4, name: 'aaaa' },
    { id: 5, name: 'bbbb' },
    { id: 6, name: 'cccc' },
  ];

  return {
    props: {
      initialCourses,
    },
  };
}

export default CourseList;
