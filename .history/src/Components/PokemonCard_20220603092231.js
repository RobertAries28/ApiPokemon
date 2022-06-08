import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const PokemonCard = ({pokemonUrl}) => {

    const [pokemon,setPokemon]=useState({});

    const navigate= useNavigate();

    useEffect(()=>{
        axios.get(pokemonUrl).then(res=>setPokemon(res.data))
    },[])

    
    return (
      
           
      
        <ul className='card'  onClick={()=>navigate(`/pokedex/${pokemon.id}`)}>
        <li className='card_img'><img src={pokemon.sprites?.other.dream_world.front_default} alt="" /></li>
           <div className='card_one'>
            <li >{pokemon.name}</li>
            <li>{pokemon.types?.[0].type.name}</li>
            </div>
            <li className='type'>Tipo</li>

            <div className='card_two'>
            <li><span>HP</span> <h3>{pokemon.stats?.[0].base_stat}</h3></li>
            <li><span>ATTACK</span> <h3>{pokemon.stats?.[1].base_stat}</h3></li>
            </div>

            <div className='card_three'>
            <li><span>DEFENSE</span> <h3>{pokemon.stats?.[2].base_stat}</h3></li>
            <li><span>SPEED</span> <h3>{pokemon.stats?.[5].base_stat}</h3></li>
            </div>
        </ul>
          
      
      
    );
}

export default PokemonCard;
