import PropTypes from 'prop-types';
import CardContainer from './style';

function Card({ id, title, image, director, releaseDate,
  runningTime, rtScore, people, locations }) {

  return (
    <CardContainer>
      <div>{ title }</div>
      <img
        src={ image }
        alt={ title }
      />
      <div>{ director }</div>
      <div>{ releaseDate }</div>
      <div>{ runningTime }</div>
      <div>{ rtScore }</div>
      {/* <div>{ people }</div> */}
      {/* <div>{ locations }</div>     */}
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