import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../contexts/favorites_context";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };


  return (
    <Link to={`/detail/${pokemon.id}`}  className="link-name">
           
    <div className="pokemon-card">
  
           
            <div className="pokemon-img-container">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="pokemon-img"
          />
        </div>
        <div className="card-body">
          <div className="card-top">
            <h3>{pokemon.name}</h3>
            <div>#{pokemon.id}</div>
          </div>

          <div className="card-bottom">
            <div className="pokemon-type">
              {pokemon.types.map((type, idx) => {
                return (
                  <div key={idx} className="pokemon-type-text">
                    {type.type.name}
                  </div>
                );
              })}
            </div>
            <div >
         
        </div>
            <button onClick={clickHeart} className="pokemon-heart-btn">
              <div className="pokemon-favorite">{heart}</div>
            </button>
          </div>
        </div>
    </div>
    </Link>
  );
};

export default Pokemon;
