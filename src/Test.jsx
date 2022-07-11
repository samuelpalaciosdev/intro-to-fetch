import React, { useState, useEffect } from 'react';

const Test = () => {
  const [characters, setCharacters] = useState(null);

  // Run only once

  useEffect(() => {
    getCharacters();
  }, []);

  // Fetch data from API
  const getCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        // Setting data obtained from API to the characters state
        setCharacters(data);
      })
      // Handle errors
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>Displaying characters from API</h1>
      <ul className="list-group">
        {/* If characters is false, it has elements, create li elements for each charater */}
        {!!characters &&
          characters.results.length > 0 &&
          characters.results.map(character => {
            return (
              <li className="list-group-item" key={character.id}>
                {character.name}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Test;
