import { Routes, Route, Navigate } from 'react-router-dom';
import Films from './pages/Films';
import GlobalStyle from './assets/styles/GlobalStyle';
import Actors from './pages/Actors';
import Locations from './pages/Locations';
import FilmDetails from './components/FilmDetails.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/films" element={ <Films /> } />
        <Route exact path="/films/details/:id" element={ <FilmDetails /> } />
        <Route exact path="/" element={ <Navigate replace to="/films" /> } />
        <Route exact path="/actors" element={ <Actors /> } />
        <Route exact path="/locations" element={ <Locations /> } />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
