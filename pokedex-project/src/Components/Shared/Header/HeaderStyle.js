import styled from "styled-components"
export const PokemonListPageHeader = styled.header`
width: 100% ;
color: black;
height: fit-content;
background-color: white;
text-align: center;
display: flex;
justify-content: space-around;
align-items: center;
max-height: 18.75rem;
padding: 1rem 0;
position: sticky;
top: 0px;
z-index: 3;
margin-bottom: 1rem;

img{
    width: 20%;
    height: 20%;
    transform: translateX(-15%);
}
button{
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    min-width: 8rem;
    &:nth-child(1){
        background: unset;
        border: unset;
        text-decoration: underline;

    }
    &:nth-child(3){
        background-color: #33A4F5;
        border: unset;
        border-radius: 0.5rem;
        color: white;
    }
    img{
        width: 0.5rem;
        height: 1rem;
        align-self: center;
    }
    &.release{
    background-color: #FF6262 !important;
}
}

@media (max-width: 28.875rem) {
    button{
        scale: 0.7;
    }
}
`

export const PokeName = styled.p`
text-transform: capitalize;
`