

export const goToPokedexPage = (navigate, home) => {
    if (home) {
        return navigate("/")
    } else {
        navigate("/pokedex");
    }
};
export const goBack = (navigate) => {
    navigate("/");
};

export const goToPokeDetails = (navigate, pokemonName, isShiny) => {
    !isShiny ?
        navigate(`/details/${pokemonName}`)
        :
        navigate(`/details/${pokemonName}/shiny`)
}