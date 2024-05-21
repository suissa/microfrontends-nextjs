import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCourses, filterCourses } from '../../store';
import axios from 'axios';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.filtered);
  const query = useSelector(state => state.courses.query);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/courses');
        dispatch(setCourses(response.data));
      } catch (error) {
        console.error('Erro ao buscar cursos:', error);
      }
    };

    fetchCourses();
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterCourses());
  }, [dispatch, query]);

  return (
    <div>
      <h1>Lista de Cursos</h1>
      <ul>
        {courses?.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
