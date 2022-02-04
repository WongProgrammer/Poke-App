import React, { useState } from 'react';
import {Button, FormControl, MenuItem, Paper, Select, TextField } from '@mui/material';
function PokemonAdd({addPokemon, pokemonTypes}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        let tempPokemon = {
            name:name,
            description:description,
            type:type,
        };
        addPokemon(tempPokemon);
        // console.log(tempPokemon);
    }
  
    return (
    //Render first the load this... probably put this in the beginning?
    <Paper>
        <FormControl>
            <form onSubmit={handleSubmit}>
                <TextField name='name' onChange={e => setName(e.target.value)}/>
                <TextField name='description' onChange={e => setDescription(e.target.value)}/>
                <Select onChange={e => setType(e.target.value)} defaultValue="">
                    {pokemonTypes.map(pokemonType => {
                        return(
                            <MenuItem value={pokemonType.PokemonTypePK} key={pokemonType.PokemonTypePK}>{pokemonType.Description}</MenuItem>
                        );
                    })}
                </Select>
                <Button type="submit">Submit</Button>
            </form>
        </FormControl>
    </Paper>
    )
}

export default PokemonAdd;
