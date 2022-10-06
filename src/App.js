import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './assets/styles/GlobalStyle';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
