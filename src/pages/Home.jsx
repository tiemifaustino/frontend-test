import { getFilms } from '../api/requestFilms';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import HomeContainer from '../assets/styles/Home';

function Home() {
  const [ allFilms, setAllFilms ] = useState();
  const [ filterName, setFilterName ] = useState('');

  const handleFilter = (e) => {
    setFilterName(e.target.value);
  }

  const fetchFilms = async () => {
    const films = await getFilms();
    setAllFilms(films);
  }

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <HomeContainer>
      <Navbar />
      <div className="filter__name">
        <input 
          type="text"
          value={ filterName }
          onChange={ handleFilter }
          placeholder="Movie's name"
        />
      </div>

      <div className="films__section" >
        {
          allFilms &&
            allFilms
              .filter((film) => film.title.toLowerCase().includes(filterName))
              .map(({ id, title, image, director, release_date,
                running_time, rt_score, people, locations }) => (
                  <Card
                    key={ id }
                    id={ id }
                    title={ title }
                    image={ image }
                    director={ director }
                    releaseDate={ release_date }
                    runningTime={ running_time }
                    rtScore={ rt_score }
                    people={ people }
                    locations={ locations }
                  />
                ))
        }
      </div>
    </HomeContainer>
  )
}

export default Home;