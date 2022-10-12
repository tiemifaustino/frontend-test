// import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

function Actors() {
  return (
    <>
      <Navbar />
      <div className="filter__name">
        <input
          type="text"
          placeholder="Actor's name"
        />
      </div>

      <div className="films__section">
        Teste Actors
      </div>
    </>
  );
}

export default Actors;
