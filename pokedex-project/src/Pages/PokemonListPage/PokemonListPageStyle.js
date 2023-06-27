
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
display: grid;
grid-template-columns: repeat(3,1fr);
width: 100vw;

@media (max-width: 60.125rem) {
    grid-template-columns: repeat(2,1fr);
}
@media (max-width: 762px) {
    grid-template-columns: repeat(2,50%);
}
@media (max-width: 662px) {
    grid-template-columns: 1fr;
   justify-items: center;
}
`

export const CardHolder = styled.div`
     width: 100%;
            display: grid;
            justify-content: center;
            align-content: center,
            
`
