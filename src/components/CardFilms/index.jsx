import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardContainer from './style';

function CardFilms({ id, title, image }) {
  return (
    <CardContainer>

      <Link to={ `/films/details/${id}` }>
        <div>{ title }</div>
        <img
          src={ image }
          alt={ title }
        />
      </Link>

    </CardContainer>
  );
}

CardFilms.propTypes = {
  title: PropTypes.string,
  director: PropTypes.string,
  releaseDate: PropTypes.string,
  runningTime: PropTypes.string,
  rtScore: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default CardFilms;
