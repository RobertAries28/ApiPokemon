import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {
    const user = useSelector(state=>state.user)

    const [pokemons,setPokemons]= useState([])
    const[pokemonsSearch,setPokemonsSearch]= useState("");
    const[pokemonTypes,setPokemonTypes]= useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/ability/?limit=20&offset=20").then(res=>setPokemons(res.data));

    },[])

    console.log(pokemons)
    return (
        <div>
            
        </div>
    );
}

export default Pokedex;
