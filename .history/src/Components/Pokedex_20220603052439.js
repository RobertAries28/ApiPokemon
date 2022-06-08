import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokedex = () => {
    const user = useSelector(state=>state.user)

    const [pokemons,setPokemons]= useState([])
    const[pokemonsSearch,setPokemonsSearch]= useState("");
    const[pokemonTypes,setPokemonTypes]= useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/").then(res=>setPokemons(res.data.results));
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
        .then(res=> setPokemons(res.data.name))
  
    }
    return (
        <div>
            <h1>Pokedex</h1>
            <p>Welcome {user} ,here you can find your favorite pokemon</p>
            
            <select onChange={filterCharacters}>
                <option value=""></option>
                {
                    pokemonTypes.map(type=>(
                        <option value={type.url}>{type.name}</option>
                    ))
                }
            </select>

            <div>
                <input type="text" value={pokemonsSearch} onChange={e=>setPokemonsSearch(e.target.value)}/>
                <button onClick={search}>Buscar</button>
            </div>

            {
                pokemons.map(pokemon=>(
                   <PokemonCard key={pokemon.url !== undefined ? pokemon.url : pokemon} pokemonUrl={pokemon.url !== undefined ? pokemon.url : pokemon} />
                ))
            }
        
        </div>
    );
}

export default Pokedex;
