import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography
} from '@mui/material';

function PokemonCard({ name, key, description }) {

  return (
    <Card>
        <Typography> {name} </Typography>
      <CardContent>
        {description}
      </CardContent>

    </Card>);
}

export default PokemonCard;