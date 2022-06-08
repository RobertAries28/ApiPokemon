import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

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
        <div className='card_id'>
       
            <h1>{pokemon.id}</h1>
            <h1>{pokemon.name}</h1>

            <div>
            <h3>{pokemon.weight}</h3>
            <h3>{pokemon.height}</h3>
            </div>

            <div>
            <div>
               <h3>Type:</h3>
               <span> {pokemon.types?.[0].type.name}</span>
            </div>
           
           <div>
              <h3>Abilities:</h3>
              <span> {pokemon.abilities?.[0].ability.name}</span>
            </div>

            </div>

    <h3>Stats</h3>
            <ul>
            <li><span>HP</span> <span>{pokemon.stats?.[0].base_stat}/100</span></li>
            <li><span>ATTACK</span> <span>{pokemon.stats?.[1].base_stat}/100</span></li>
            <li><span>DEFENSE</span> <span>{pokemon.stats?.[2].base_stat}/100</span></li>
            <li><span>SPEED</span> <span>{pokemon.stats?.[5].base_stat}/100</span></li>

            </ul>
            <ul>
              
            </ul>
        </div>
        </div>
    );
}

export default PokedexId;
