import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery, filterCourses } from '../../store';

const CourseSearch = () => {
  const dispatch = useDispatch();
  const [query, setLocalQuery] = useState('');

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setLocalQuery(newQuery);
    dispatch(setQuery(newQuery));
    dispatch(filterCourses());
  };

  return (
    <div>
      <h1>Buscar Cursos</h1>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Digite o nome do curso"
      />
    </div>
  );
};

export default CourseSearch;
