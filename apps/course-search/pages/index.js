import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery, filterCourses } from '../store';

const CourseSearch = ({ onSearch }) => {
  const dispatch = useDispatch();
  const [query, setLocalQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(query));
    dispatch(filterCourses());
    onSearch(query);
  };

  return (
    <div>
      <h1>Buscar Cursos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="Digite o nome do curso"
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default CourseSearch;
