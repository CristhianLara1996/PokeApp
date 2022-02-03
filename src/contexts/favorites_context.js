import React from "react";

const FavoriteContext = React.createContext({
    favoritePokemones: [],
    updateFavoritePokemones:(id)=>null
})

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;