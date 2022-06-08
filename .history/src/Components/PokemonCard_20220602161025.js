import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({pokemonUrl}) => {

    const [pokemon,setPokemon]=useState({});

    const navigate= useNavigate();

    useEffect(()=>{
        axios.get(pokemonUrl).then(res=>setPokemon(res.data))
    },[])

    console.log(pokemon)
    return (
        <div onClick={()=>navigate(`/pokedex/${pokemon.id}`)}>
        <ul>
        <li><img src={pokemon.sprites?.other.dream_world.front_default} alt="" /></li>
            <li >{pokemon.name}</li>
            <li>{pokemon.types?.[0].type.name}</li>
            <li><span>HP</span> <span>{pokemon.stats?.[0].base_stat}</span></li>
            <li><span>ATTACK</span> <span>{pokemon.stats?.[1].base_stat}</span></li>
            <li><span>DEFENSE</span> <span>{pokemon.stats?.[2].base_stat}</span></li>
            <li><span>SPEED</span> <span>{pokemon.stats?.[5].base_stat}</span></li>
        </ul>
          
        </div>
    );
}

export default PokemonCard;
