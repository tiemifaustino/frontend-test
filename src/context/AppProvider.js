import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import AppContext from './AppContext';
import { getFilms, getPeople } from '../api/requestFilms';

function AppProvider({ children }) {
  const [allFilms, setAllFilms] = useState([]);
  const [peopleFilm, setPeopleFilm] = useState([]);

  const fetchFilms = async () => {
    const films = await getFilms();
    setAllFilms(films);
  };

  const fetchPeople = async () => {
    const people = await getPeople('https://ghibliapi.herokuapp.com/people');
    setPeopleFilm(people);
  };

  const context = useMemo(() => ({
    allFilms,
    setAllFilms,
    fetchFilms,
    peopleFilm,
    setPeopleFilm,
    fetchPeople,
  }), [
    allFilms,
    peopleFilm,
  ]);

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
