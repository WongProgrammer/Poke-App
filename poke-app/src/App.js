import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Stack } from '@mui/material';
import PokemonList from './components/PokemonList';
import PokemonAdd from './components/PokemonAdd'

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [insertDate, setInsertDate] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState([]);

  const fetchPokemon =  async () => {
    try {
      axios.get('http://localhost:5000/api/v1/pokemon/').then(res => {
        setPokemon(res.data);
      }).catch(err => {
        console.log(err);
      });
    }catch(err) {
      console.log(err);
    }
  };

  const fetchPokemonTypes = async() => {
    try {
     axios.get('http://localhost:5000/api/v1/types/').then(res => {
         setPokemonTypes(res.data);
         console.log(pokemonTypes)
     }).catch(err => {
         console.log(err);
     });
    } catch (err){
     console.log(err);
    }
};

  //axios.post('http://localhost:5000/api/v1/pokemon/', {name : "Tyrogue", description : "Scuffle Pokémon", type : 3})
  const addPokemon = (newPokemon) => {
    const date = new Date();
    setInsertDate(date.toLocaleString());
    console.log(insertDate);
   
    const {name, description, type} = newPokemon;
    console.log(newPokemon)
    try {
      axios.post('http://localhost:5000/api/v1/pokemon/', {name : name, description : description, type : type}).then(res => {
        console.log("Pokemon Added!" + res.data);
      });
     
    }catch (err){
      console.log(err);
    }
  }
    
  useEffect(() => {
    fetchPokemon();
    fetchPokemonTypes();
  }, []);


  return (
    <Stack
      justifyContent="center"
      alignItems="center"
    >
      <PokemonList
        data={pokemon}
      />
      <PokemonAdd
        addPokemon={addPokemon}
        pokemonTypes={pokemonTypes}
      />
    </Stack>
  );
}

export default App;
