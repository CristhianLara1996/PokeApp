import React, { useState, useEffect } from 'react';
import { searchPokemon } from "../services/pokeApi";
import { useParams } from "react-router-dom";
import Footer from './footer';

import '../styles.css';

const Detail = () => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // const {id} = props; 
  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const res = await searchPokemon(id);
      console.log(res);
      setPokemon(res);
      setLoading(false);
      return res;

    } catch (err) { }
  }

  useEffect(() => {
    fetchPokemon();
  }, [])

  return <div>

    {loading ? (
      <div>Cargando pokemones...</div>
    ) :
      (<Pokemon pokemon={pokemon} key={pokemon.id} />)}
  </div>
}

export default Detail;


const Pokemon = (props) => {
  const { pokemon } = props;

  return (

    <div className='detail-container row'>
        <div className='col-3 '>
          <div className='d-flex justify-content-center flex-column align-items-center' >

            <img className={"pokemon_image"} src={pokemon.sprites.front_default} alt={pokemon.name} />
            <br/>
            <div className='card'>

              <p className='pokemon-title'>{pokemon.name}</p>
            </div>
          </div>
        </div>
        <div className='col-9 p-2'>
          <div class="card">
            <h5 className="card-header">Types</h5>
            <div className="card-body">
              <ul>
                {
                  pokemon.types.map(type => {
                    return <li key={type.type.name}>{type.type.name}</li>
                  })
                }
              </ul>
            </div>
          </div>
          <br />
          <div class="card">
            <h5 className="card-header">Stats</h5>
            <div className="card-body">
              <ul>
                {
                  pokemon.stats.map(stat => {
                    return <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
                  })
                }
              </ul>
            </div>
          </div>

          <br />

          <div class="card">
            <h5 className="card-header">Abilities</h5>
            <div className="card-body">
              <ul>
                {
                  pokemon.abilities.map(ability => {
                    return <li key={ability.ability.name}>{ability.ability.name}</li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>

      <Footer />
    </div>
  );
};
