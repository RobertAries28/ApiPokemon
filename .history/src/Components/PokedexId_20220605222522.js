import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const PokedexId = () => {

    const[pokemon,setPokemon]=useState({})
    
    const{id}= useParams();
   
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
       .then(res=>setPokemon(res.data));
      
      
    },[])

   

    console.log(pokemon)
 

    return (
      <>
        <div>
           <div className='img_pokedexId'>
             <img className='' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
             </div>
        <div className='card_id'>
             <div className='filling'>

             </div>
            <h1>{pokemon.id}</h1>
            <h1>{pokemon.name}</h1>

            <div className='card_id--size'>
            <h3><span>Weight</span><h4>{pokemon.weight}</h4></h3>
            <h3><span>height</span><h4>{pokemon.height}</h4></h3>
            </div>

            <div className="card_id--typeAbilities">
            <div>
               <h3>Type:</h3>
               <span> {pokemon.types?.[0].type.name}</span>
            </div>
           
           <div>
              <h3>Abilities:</h3>
              <span> {pokemon.abilities?.[0].ability.name}</span>
            </div>

            </div>
<div className='container'>
    <h3 className='stats'>Stats</h3>
            <ul className='features'>
            <li><span>HP</span> <span>{pokemon.stats?.[0].base_stat}/150</span></li>
            
            <div class="habilidades">
 
               <div class="contenedor">
                 <div class="relleno">
                 </div>
               </div>
            </div>
            <li><span>ATTACK</span> <span>{pokemon.stats?.[1].base_stat}/150</span></li>
            <div class="habilidades">
 
              <div class="contenedor">
              <div class="relleno">
              </div>
              </div>
              </div>       
            <li><span>DEFENSE</span> <span>{pokemon.stats?.[2].base_stat}/150</span></li>
            <div class="habilidades">
 
               <div class="contenedor">
                 <div class="relleno">
                 </div>
               </div>
            </div>
            <li><span>SPEED</span> <span>{pokemon.stats?.[5].base_stat}/150</span></li>
            <div class="habilidades">
 
 <div class="contenedor">
   <div class="relleno">
   </div>
 </div>
</div>
            </ul>
          
        </div>
        </div>
        </div> 

        <div>
<h1>Movements</h1>
<ul>
{(pokemon.moves).map(move=>(<li>{move.move.name}</li>))

}
</ul>

        </div>
      </>
    );
}

export default PokedexId;
