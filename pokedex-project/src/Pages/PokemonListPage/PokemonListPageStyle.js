
import styled from "styled-components";

export const PokemonListWrapper = styled.div`
width: 100%;
padding: 1rem;
`
export const PokedexPageCards = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
padding: 1rem;
column-gap: 1rem;
color: white;
/* display: grid;
grid-template-columns: repeat(12,1fr);
overflow-x: hidden; */
& .empty-list-text{
    font-size: 2rem;
    text-align: center;
}
@media (max-width: 48rem) {
    grid-template-columns: repeat(6,1fr);
}
`

export const CardHolder = styled.div`
     width: 100%;
            display: grid;
            justify-content: center;
            align-content: center,
`
