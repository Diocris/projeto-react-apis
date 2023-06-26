import styled from "styled-components";


export const PokemonCardStyle = styled.div`
display: ${(props) => props.display};
  color: #ffffff;
  position: relative;
  border-radius: 1rem;
  padding: 0.5rem;
  height: 16.63rem;
  flex-basis: 27.5rem;
  min-width: 27.5rem;

  @media (max-width: 60.125rem) {
    flex-basis: 50%;
    min-width: 26.5rem;
  }
  @media (max-width: 462px) {
    scale: 0.8;
  }

`


export const PokemonImage = styled.img`
    aspect-ratio: 1/3;
    width: 12.06rem;
    height: 12.06rem;
    float: right;
    position: absolute;
  left: 50%;
  top: -20%;
    z-index: 1;

    `

export const PokeballBg = styled.img`
    position: absolute;
    left: 50%;
    top: -15%;
    transform: translate(-15%,-5.5%);
    z-index: 0;
    clip-path: inset(22.5% 0 0 0);

  @media (max-width: 60.125rem) {
    clip-path: inset(22.5% 0 0 0);
  }
`

export const ContentHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: nowrap;
    width: 100%;
    height: 13.13rem;
    background-color: ${(props) => props.color};
    padding: 1rem;
    border-radius: 1rem;
`

export const TextHolder = styled.div`
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
`

export const IdSpan = styled.span`
   font-size: 1rem;
`
export const NameSpan = styled.span`
    text-transform: capitalize;
`

export const TypeSpan = styled.span`
    display: inline-flex;
    gap: 0.5rem;
`

export const TypeSpanImage = styled.img`
    width: calc(5.63rem/1.3);
    height: calc(1.88rem/1.3);
`

export const ButtonWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  top: 100%;
  height: 2.5rem;
  justify-self: end;
  align-items: flex-end;
  & button:nth-child(2){width: fit-content;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    padding: 0.5rem 2rem;
    font: 1rem;
    text-align: center;
    min-width: 7.5rem;
        font-weight: unset !important;
  }
  
  `




export const DetailsAnchor = styled.a`
    background: unset;
    text-decoration: underline;
    position: relative;
    color: white;
    font-size: 1rem;
    font-weight: 700;
  `

export const CatchButton = styled.button`
    width: fit-content;
    justify-self: center;
    align-self: center;
    float: center;
    `