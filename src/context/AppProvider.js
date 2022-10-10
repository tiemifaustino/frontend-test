import PropTypes from 'prop-types';
import React, { useState } from "react";
import AppContext from "./AppContext";
import { getFilms } from '../api/requestFilms';

function AppProvider({ children }) {
  const [ allFilms, setAllFilms ] = useState([]);

  const fetchFilms = async () => {
    const films = await getFilms();
    setAllFilms(films);
  };

  const context = {
    allFilms,
    setAllFilms,
    fetchFilms,
  };

  return (
    <AppContext.Provider value={ context } >
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;