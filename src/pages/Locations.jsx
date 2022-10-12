// import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

function Locations() {
  return (
    <>
      <Navbar />
      <div className="filter__name">
        <input
          type="text"
          placeholder="Location's name"
        />
      </div>

      <div className="films__section">
        Teste Locations
      </div>
    </>
  );
}

export default Locations;
