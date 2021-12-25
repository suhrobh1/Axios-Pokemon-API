import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';



function App() {
  
  const [pokemon, setPokemon] = useState([]);
  

useEffect(() => {
axios.get('https://pokeapi.co/api/v2/pokemon?&limit=807')
  .then((res) => {
    console.log(res.data);
    setPokemon(res.data.results);
  })
  .catch((err) => console.log(err))
}, [])

  return (
    <div className="App">
      {
        pokemon.map((character, index) => {
          return (
          <li key={index}>{character.name}</li>
          )
        })
      }
       
    </div>
  );
}

export default App;
