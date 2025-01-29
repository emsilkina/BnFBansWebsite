import React, { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config'; // Only import Firestore (db)
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // Fetch people data from Firestore when the component mounts
    const fetchPeople = async () => {
      const peopleCollection = collection(db, 'People'); // Specify your collection name
      const peopleSnapshot = await getDocs(peopleCollection);
      const peopleList = peopleSnapshot.docs.map(doc => ({
        name: doc.id, // Assuming each document has the person's name as the document ID
        bans: 0 // Initialize bans as 0 (you can change this if you have a bans field in Firestore)
      }));
      setPeople(peopleList); // Set people state with fetched data
    };

    fetchPeople();
  }, []); // Empty array ensures this effect runs only once on mount

  const addBans = (name) => {
    setPeople(prevPeople =>
      prevPeople.map(person =>
        person.name === name
          ? { ...person, bans: person.bans + 1 }
          : person
      )
    );
  };

  const subtractBans = (name) => {
    setPeople(prevPeople =>
      prevPeople.map(person =>
        person.name === name
          ? { 
            ...person, 
            bans: person.bans > 0 ? person.bans - 1 : person.bans 
          }
          : person
      )
    );
  };

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
