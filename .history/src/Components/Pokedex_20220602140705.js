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
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1126&offset=0").then(res=>setPokemons(res.data.results));
        axios.get("https://pokeapi.co/api/v2/type/").then(res=>setPokemonTypes(res.data.results))
    },[])

    console.log(pokemons)
    console.log(pokemonTypes)

    const search=()=>{
        console.log(pokemonsSearch)
        navigate(`/pokedex/${pokemonsSearch}`);
    }

    const filterCharacters=(e)=>{
        axios.get(e.target.value)
        .then(res=> setPokemons(res.data.residents))
  
    }
    return (
        <div>
            
        </div>
    );
}

export default Pokedex;
