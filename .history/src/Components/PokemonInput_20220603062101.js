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
           <div>
            <h1>Hello Trainer!</h1>
            <img src="data:image/jpeg;base64,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" alt="" />
            </div>
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
