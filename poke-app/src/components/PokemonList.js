import React from 'react';
import PokemonCard from './PokemonCard';
import { Box } from '@mui/system';
function PokemonList({data}) {
  return(
    <Box>
      {data.map((pokemon) => {
        return(
          <PokemonCard
          key={pokemon.PokemonPK}
          name={pokemon.Name}
          description={pokemon.Description}
          />
        );
      })}
    </Box>

  );
}

export default PokemonList;
