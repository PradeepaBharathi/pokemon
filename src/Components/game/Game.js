import React, { useState, useEffect } from 'react';
import './game.css';
import heart from '../../assests/heart.png';
import axios from 'axios';
import { useTheme } from '../context/Context';
import { useNavigate } from 'react-router-dom';

function Game() {
  const {  like, setLike } = useTheme();
  const [stack, setStack] = useState([]); // state to hold the array of pokemon cards that are displayed currenlty
 
  const navigate = useNavigate();

  const fetchPokemon = async (callback) => { // function to fetch pokemon from api
    const id = Math.floor(Math.random() * 100) + 1;
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const newPokemon = response.data;
      setStack((prevStack) => [newPokemon, ...prevStack]);//on successful fetch, it updates the stack state with the new Pokémon data and calls the callback if provided.
      if (callback) {
        callback(newPokemon);
      }
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  const handleLike = async () => {
    if (like.length >= 10) {
      alert('Only 10 Pokémon can be chosen');
      navigate('/like');
      return;
    }
    await fetchPokemon((fetchedPokemon) => {
      setLike((prev) => [...prev, fetchedPokemon]);
    });
    
  };

  const handleDislike = async () => {
    await fetchPokemon();
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className='game-container'>
      <div className='card-container'>
        {stack.map((pokemon, index) => (
          <div className='card' style={{ zIndex: stack.length - index }} key={index}>
            <img src={heart} alt='heart' className='heart' />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
              className='pokemon-img'
            />
            <h3 className='pokemon-name'>{pokemon.name}</h3>
            <div className='abilities'>
              {pokemon.abilities.map((ability, idx) => (
                <button key={idx} className='ability-btn'>{ability.ability.name}</button>
              ))}
            </div>
            <div className='btn-list'>
              <div id='dislike' onClick={handleDislike}> 
              <span className='dislikeemoji'>👎</span>
              <span className='word'>Dislike</span>
              </div>
              <div id='like' onClick={handleLike} > 
              <span className='heartemoji'>💖 </span>
              <span className='word'>Like </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
