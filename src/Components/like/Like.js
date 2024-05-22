import React from "react";
import'./like.css'
import { useTheme } from "../context/Context";
function Like() {
  const { like,theme } = useTheme();
// like is initially stored in context , then using the game component data is fetched and passed to like component
  return (
    <div className={`${theme} likedPokemon`}>
     
      {like.map((pokemon) => {
        return (
          <div className="pokemon-card" key={pokemon.id}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
              className="poke-image"
            />
            <h3>{pokemon.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Like;
