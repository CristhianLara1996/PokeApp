import React, { useState } from "react";
import Pagination from "./pagination";
import Pokemon from "./pokemon";

const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading } = props;

  const [isActive, setIsActive] = useState(false);

  const listToggle = () => {
    setIsActive(true)
    console.log(isActive);
  }

  const gridToggle = () => {
    setIsActive(false)
    console.log(isActive);
  }

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>

        <ul class="nav nav-pills nav-fill">
          <li class="nav-item" >
            <button className="view-btn list-view" title="List View" onClick={listToggle} >
             
            <a class="flex-sm-fill text-sm-center" href="#lista"><i class="fas fa-list"></i></a>

    
            </button>

          </li>
          
          <li class="nav-item">
        
            <button className="view-btn grid-view active" title="Grid View" onClick={gridToggle}>
            <a class="flex-sm-fill text-sm-center" href="#grid"><i class="fas fa-th-large"></i></a>

            </button>
          </li>
        </ul>

        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
      
        
        <div id="lista" className={isActive?'pokedex-list':'pokedex-grid'}>
          {pokemons.map((pokemon, idx) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
        </div>
      
        
        
      )}
    </div>
  );
};

export default Pokedex;
