import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Stack } from '@mui/material';
import PokemonList from './components/PokemonList';

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  const fetchPokemon =  async () => {
    try {
      axios.get('http://localhost:5000/api/v1/pokemon/').then(res => {
        setPokemon(res.data);
        console.log(pokemon[0].PokemonPK)
      });
    }catch(err) {
      console.log(err);
    }
  };
    
  useEffect(() => {
    fetchPokemon();
  }, []);


  return (
    <Stack>
      <PokemonList
      data={pokemon}/>
    </Stack>
  );
}

export default App;
