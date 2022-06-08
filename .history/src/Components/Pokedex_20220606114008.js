import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import '../App.css';

const Pokedex = () => {
    const user = useSelector(state=>state.user)

    const [pokemons,setPokemons]= useState([])
    const[pokemonsSearch,setPokemonsSearch]= useState("");
    const[pokemonTypes,setPokemonTypes]= useState([]);
    const navigate = useNavigate()

    const[page,setPage]= useState(1);

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=500&offset=0").then(res=>setPokemons(res.data.results));
        axios.get("https://pokeapi.co/api/v2/type/").then(res=>setPokemonTypes(res.data.results))
    },[])

   
    console.log(pokemonTypes)
    
    const search=()=>{
        console.log(pokemonsSearch)
        navigate(`/pokedex/${pokemonsSearch}`);
    }

    const filterTypes=(e)=>{
        axios.get(e.target.value)
        .then(res=> setPokemons(res.data.url))
  
    }

    const pokemonNumbers=10
    
    const lastIndex=pokemonNumbers*page;
    const firstIndex=lastIndex-pokemonNumbers;
   
     
    const lastPage= Math.ceil(pokemons.length / pokemonNumbers)
    
    
    const numbers=[];

    for(let i=0; i<=lastPage; i++){
        numbers.push(i);
    }
    return (
        <div className='cardElement'>

        <div className='cardElement_img'>
       
                <img src="https://cdn.pixabay.com/photo/2016/07/23/13/21/pokemon-1536855_960_720.png" alt="" />
            
        </div>

        <div className='cardElement_text'>
            <h1>Pokedex</h1>
            <p>Welcome {user} ,here you can find your favorite pokemon</p>
        </div>
            
            <div className='cardElement_inputs'>

            <div>
                <input type="text" placeholder='Name or Id' value={pokemonsSearch} onChange={e=>setPokemonsSearch(e.target.value)}/>
                <button onClick={search}>Buscar</button>
            </div>
            <select onChange={filterTypes}>
                <option value=""></option>
                {
                    pokemonTypes.map(type=>(
                        <option value={type.url}>{type.name}</option>
                    ))
                }
            </select>

            
            </div>

            <div className='card_major'>
            {
                pokemons.map(pokemon=>(
                   <PokemonCard key={pokemon.url !== undefined ? pokemon.url : pokemon} pokemonUrl={pokemon.url !== undefined ? pokemon.url : pokemon} />
                ))
            }
            </div>

            {
                numbers.map(number=>(
                    <button className='pagination' onClick={()=>setPage(number)}>{number}</button>
                ))
            }
            <div className='container_pagination'>
            <button  className='pagination' onClick={()=>setPage(page-1)} disabled={page ===1}>Prev</button>
            <button  className='pagination' onClick={()=>setPage(page+1)} disabled={page===lastPage}>Next</button>
            </div>
        </div>
    );
}

export default Pokedex;
