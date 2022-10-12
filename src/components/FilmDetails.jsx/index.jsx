import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilmDetailsContainer from './style';
import { getFilm, getPeople } from '../../api/requestFilms';
import Navbar from '../Navbar';

function FilmDetails() {
  const [film, setFilm] = useState('');
  const [peopleFilm, setPeopleFilm] = useState();
  const { id } = useParams();

  const fetchFilm = async () => {
    const movie = await getFilm(id);
    setFilm(movie);
  };

  const fetchPeople = async () => {
    const arrayOfPeople = await film.people.map(async (person) => {
      const data = await getPeople(person);
      return data;
    });
    setPeopleFilm([...await Promise.all(arrayOfPeople)]);
  };

  useEffect(() => {
    fetchFilm();
    fetchPeople();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [film]);

  return (
    <FilmDetailsContainer>
      <Navbar />
      <div className="film_details_container">
        <div className="film_details_title">
          <div>{ film.title }</div>
          <div>
            {
              `Original Title: ${film.original_title} - ${film.original_title_romanised}`
            }
          </div>
          <img
            src={ film.movie_banner }
            alt={ film.title }
          />
        </div>
        <div>{ film.description }</div>
        <div className="film_details_content">
          <div>Running Time:</div>
          <div>{ `${film.running_time} min` }</div>
          <div>Rotten Tomato Score:</div>
          <div>{ film.rt_score }</div>
          <div>Release Date:</div>
          <div>{ film.release_date }</div>
          <div>Director:</div>
          <div>{ film.director }</div>
          <div>producer:</div>
          <div>{ film.producer }</div>
          <div>Actors:</div>
          <div>
            {
              peopleFilm && (
                peopleFilm.length > 2
                  ? peopleFilm.map((person) => (
                    <div key={ person.id }>{ person.name }</div>
                  ))
                  : peopleFilm[0].map((person) => (
                    <div key={ person.id }>{ person.name }</div>
                  ))
              )
            }
          </div>
        </div>
      </div>

    </FilmDetailsContainer>
  );
}

export default FilmDetails;
