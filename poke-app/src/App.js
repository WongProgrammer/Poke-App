import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Container } from '@mui/material';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const fetchPokemon =  async () => {
    try {
      axios.get('http://localhost:5000/api/v1/pokemon/').then(res => {
        console.log(res.data);
        setPokemon(res.data);
      });
    }catch(err) {
      console.log(err);
    }
  };
    
  useEffect(() => {
    fetchPokemon();
  }, []);


  return (
    <Container>

    </Container>
  );
}

export default App;
