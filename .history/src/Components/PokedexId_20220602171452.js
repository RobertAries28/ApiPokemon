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
            <h3>{pokemon.weight}</h3>
            <h3>{pokemon.height}</h3>
            <h3>Type:<span> {pokemon.types?.[0].type.name}</span></h3>
 
            <h3>Abilities:<span> {pokemon.abilities?.[0].ability.name}</span></h3>
    <h3>Stats</h3>
            <ul>
            <li><span>HP</span> <span>{pokemon.stats?.[0].base_stat}</span></li>
            <li><span>ATTACK</span> <span>{pokemon.stats?.[1].base_stat}</span></li>
            <li><span>DEFENSE</span> <span>{pokemon.stats?.[2].base_stat}</span></li>
            <li><span>SPEED</span> <span>{pokemon.stats?.[5].base_stat}</span></li>

            </ul>
            <ul>
            {
                    pokemon.moves.forEach(move=>{
                        <li>{move.move.name}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default PokedexId;
