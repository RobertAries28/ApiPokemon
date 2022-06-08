import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({pokemonUrl}) => {

    const [pokemon,setPokemon]=useState({});

    const navigate= useNavigate();

    useEffect(()=>{
        axios.get(pokemonUrl).then(res=>setPokemon(res.data))
    },[])
    return (
        <div onClick={()=>navigate(`/pokedex/${pokemon.id}`)}>
        <ul>
            <li >{pokemon.name}</li>
            <img src={pokemon.url} alt="" />
        </ul>
          
        </div>
    );
}

export default PokemonCard;
