import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedexId = () => {

    const[pokemon,setPokemon]=useState({})
    const{id}= useParams();

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0/${id}`)
       .then(res=>setPokemon(res.data))
    },[])
    return (
        <div>
            <img src="" alt="" />
        </div>
    );
}

export default PokedexId;
