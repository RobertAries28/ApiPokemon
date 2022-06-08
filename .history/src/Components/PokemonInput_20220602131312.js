import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUser } from '../Store/Slices/pokemonSlice';

const PokemonInput = () => {

    const [userName,setUserName]= useState("")

    const navigate=useNavigate();
    const dispatch= useDispatch();

    const getName=()=>{
        dispatch(changeUser(userName))
        navigate("/pokedex")
    }
    return (
        <div>
            <h1>Hello Trainer!</h1>
            <img src="" alt="" />
            <p>Give me your name to start</p>
            <input type="text"
             value={userName}
             onChange={e=> setUserName(e.target.value)}
             />
             <button onClick={getName}>Enviar</button>
        </div>
    );
}

export default PokemonInput;
