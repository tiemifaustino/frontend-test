import { useEffect, useContext, useState } from 'react';
import ActorsContainer from '../assets/styles/Actors';
import Navbar from '../components/Navbar';
import AppContext from '../context/AppContext';

function Actors() {
  const [filterPersonName, setFilterPersonName] = useState('');
  const {
    peopleFilm,
    fetchPeople,
  } = useContext(AppContext);

  const handleFilter = ({ target }) => {
    setFilterPersonName(target.value);
  };

  useEffect(() => {
    fetchPeople();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ActorsContainer>
      <Navbar />
      <div className="filter__name">
        <input
          type="text"
          placeholder="Actor's name"
          value={ filterPersonName }
          onChange={ handleFilter }
        />
      </div>

      <div className="people__section">
        {
          peopleFilm
            && peopleFilm
              .filter((person) => person.name.toLowerCase().includes(filterPersonName))
              .map(({ id, name }) => (
                <div key={ id }>
                  { name }
                </div>
              ))
        }
      </div>
    </ActorsContainer>
  );
}

export default Actors;
