import { getFilms } from '../api/requestFilms';
import { useEffect, useState } from 'react';

function Home() {
  const [ allFilms, setAllFilms ] = useState();

  const fetchFilms = async () => {
    const films = await getFilms();
    setAllFilms(films);
  }

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <div>
      Hello world! uhauhsdhaisdhiashd
      {
        allFilms && 
          allFilms.map((film) => (
            <div>{ film.title }</div>
          ))
      }
    </div>
  )
}

export default Home;