import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize state for the people array
  const [people, setPeople] = useState([
    { name: "Emily", bans: 3 },
    { name: "Rifa", bans: 0 }, 
    { name: "Omkar", bans: 1 },
    { name: "Soorya", bans: 0 }, 
    { name: "Naavya", bans: 0 }
  ]);

  // Handle the button click to add a ban to the person
  const addBans = (name) => {
    setPeople(prevPeople =>
      prevPeople.map(person =>
        person.name === name
          ? { ...person, bans: person.bans + 1 } // Increment the bans count
          : person // Leave other people unchanged
      )
    );
  };

  const subtractBans = (name) => {
    setPeople(prevPeople =>
      prevPeople.map(person =>
        person.name === name
        ? { 
          ...person, 
          bans: person.bans > 0 ? person.bans - 1 : person.bans // Only decrement if bans > 0
        } // Increment the bans count
          : person // Leave other people unchanged
      )
    );
  };

  // Render each person's information along with the button
  const person = (name, bans) => {
    return (
      <div key={name}>
        <p>{name} has {bans} bans</p>
        <button className="my-button" onClick={() => subtractBans(name)}>
          Subtract Bans
        </button>
        <button className="my-button" onClick={() => addBans(name)}>
          Add Bans
        </button>
      </div>
    );
  };

  return (
    <div className="App">
      {people.map(personData => person(personData.name, personData.bans))}
    </div>
  );
}

export default App;
