import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedexId = () => {

    const[pokemon,setPokemon]=useState({})
    const{id}= useParams();

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
       .then(res=>setPokemon(res.data))
    },[])

    console.log(pokemon)
    return (
        <div>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            <h1>{pokemon.id}</h1>
            <h1>{pokemon.name}</h1>
            <h3>{}</h3>
            <h3>{}</h3>
        </div>
    );
}

export default PokedexId;
