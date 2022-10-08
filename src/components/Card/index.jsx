import PropTypes from 'prop-types';
import CardContainer from './style';
import { useState, useEffect } from 'react';
import { getPeople } from '../../api/requestFilms';

function Card({ id, title, image, director, releaseDate,
  runningTime, rtScore, people, locations }) {

  const [ peopleFilm, setPeopleFilm ] = useState();

  const fetchPeople = async () => {
    const arrayOfPeople = await people.map(async (person) => {
      const data = await getPeople(person)
      return data;
    })
    // Promise.all(arrayOfPeople).then((result) => console.log(result));
    // console.log(await Promise.all(arrayOfPeople));
    setPeopleFilm([...await Promise.all(arrayOfPeople)]);
  }

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <CardContainer>
      <div>{ title }</div>
      <img
        src={ image }
        alt={ title }
      />
      <div>{ `Director: ${director}` }</div>
      <div>{ `Release date: ${releaseDate}` }</div>
      <div>{ `${runningTime} min` }</div>
      <div>{ `Score: ${rtScore}` }</div>
      <div>
        { 
          peopleFilm &&
            peopleFilm.map((person, index) => (
              <div key={ index } >
              { 
                person.name
                  ? person.name
                  // : console.log(person[0])
                  : person.map((caracter) => (
                    <div key={ caracter.id } >
                      { caracter.name }
                    </div>
                  ))
              }
              </div>
            ))
        }
      </div>
      <div>{ console.log(peopleFilm) }</div>    
    </CardContainer>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  director: PropTypes.string,
  releaseDate: PropTypes.string,
  runningTime: PropTypes.string,
  rtScore: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default Card;