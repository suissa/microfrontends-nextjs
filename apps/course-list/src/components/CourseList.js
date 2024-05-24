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
        console.log("data: ", response.data);
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
    <div className="course-container">
      {courses?.map(course => (
        <div key={course.id} className="course-card">
          <h3>{course.title}</h3>
          <p>Duração: {course.durationLabel}</p>
          <p>Grau: {course.graduationLabel}</p>
          <p>Modalidade: {course.modalityLabel}</p>
          <button>Inscreva-se</button>
          <a href="#">Sobre o Curso</a>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
