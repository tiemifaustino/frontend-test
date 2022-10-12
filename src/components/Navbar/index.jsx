import { Link } from 'react-router-dom';
import NavbarContainer from './style';

function Navbar() {
  return (
    <NavbarContainer>
      <Link to="/films">Films</Link>
      <Link to="/actors">Actors</Link>
      <Link to="/locations">Locations</Link>
    </NavbarContainer>
  );
}

export default Navbar;
