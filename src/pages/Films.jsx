import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import CardFilms from '../components/CardFilms';
import FilmsContainer from '../assets/styles/Films';
import AppContext from '../context/AppContext';

function Films() {
  const [filterName, setFilterName] = useState('');
  const {
    allFilms,
    fetchFilms,
  } = useContext(AppContext);

  const handleFilter = ({ target }) => {
    setFilterName(target.value);
  };

  useEffect(() => {
    fetchFilms();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FilmsContainer>

      <Navbar />
      <div className="filter__name">
        <input
          type="text"
          value={ filterName }
          onChange={ handleFilter }
          placeholder="Movie's name"
        />
      </div>

      <div className="films__section">
        {
          allFilms
            && allFilms
              .filter((film) => film.title.toLowerCase().includes(filterName))
              .map(({ id, title, people, image }) => (
                <CardFilms
                  key={ id }
                  id={ id }
                  title={ title }
                  people={ people }
                  image={ image }
                />
              ))
        }
      </div>

    </FilmsContainer>
  );
}

export default Films;
