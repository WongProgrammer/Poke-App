import React from 'react';
import {
  Card,
  CardContent,
  Typography
} from '@mui/material';

function PokemonCard({ name, description }) {

  return (
    <Card
      sx={{marginBottom : 5}}
    >
      <Typography> {name} </Typography>
      <CardContent>
        {description}
      </CardContent>
    </Card>);
}

export default PokemonCard;