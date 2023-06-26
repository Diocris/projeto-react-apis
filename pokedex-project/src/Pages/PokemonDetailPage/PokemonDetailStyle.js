import styled from "styled-components";
import pokeballbg from "../../assets/pokeballbg.png"


export const DetailsWrapper = styled.div`
padding: 2rem;
@media (max-width: 462px) {
    padding: 1rem;
}
`

export const PokemonDetailHolder = styled.div`
margin-top: 3rem;
position: relative;
height: fit-content;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 1rem;
padding: 2rem;
background-image: url(${pokeballbg});
background-position: 130% 0%;
background-size: 50rem;
background-repeat: no-repeat;
background-attachment: fixed;
background-color: ${(props) => props.color};
border-radius: 1rem;
@media (max-width: 462px) {
    transform-origin: top;
    scale: 0.9;
    padding: unset
}

&>*{
    border-radius: 1rem;
}

@media (max-width: 1220px) {
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2, 1fr);
    background-position: 150% 50%;
    background-size: 100%;
    background-attachment: unset;
}
@media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    background-position: 150% 100%;
}
`

export const ImagesDiv = styled.div`
grid-column: 1/2;
height: 100%;
padding: 1rem;
display: grid;
justify-items: center;
grid-template-rows: repeat(2, 1fr);
gap: 1rem;

div{
    border-radius: 1rem;
    background-color: white;
    height: 100%;
    width: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
}
img{
    width: 10rem;
    
}
.total{
    border-bottom: 1px solid #F0F0F0;
    width: 100%;
    & p{
        font-size: 0.75rem;
    }
}
@media (max-width: 1220px) {
   grid-row: 2/2;
   grid-column: 1/2;
}
@media (max-width: 768px) {
    grid-row: 3/3;
   grid-column: 1/1;
}
`

export const StatsDiv = styled.div`
grid-column: 2/3;
height: 100%;
padding: 1rem;
min-width: 20rem;
font-size: 0.75rem;
div:nth-child(1){
    padding: 1rem;
    border-radius: 1rem;
    h3{
        border-bottom: 1px solid #F0F0F0;
    }
}
&>*{
    background-color: white;
    height: 100%;
    width: 100%;
  
}
@media (max-width: 768px) {
   grid-row: 2/2;
   grid-column: 1/1;
}

`

export const StatStyle = styled.div`
display: grid;
grid-template-columns: 3fr 1fr 4fr;
font-size: 0.75rem;
height: fit-content;
border-bottom: 1px solid #F0F0F0;

span:nth-of-type(1){grid-column: 1/2;
display: grid;
justify-items: end;
}
span:nth-of-type(2){grid-column:2/3}
div:nth-of-type(1){
    background-color: red; 
    height: 0.5rem; align-self: center; 
    border-radius: 0.5rem;
    width: ${(props) => props.widthStat / 1.5 + "%"};
    background-color: ${(props) => (props.widthStat < 50) ? "#EC4441" : (props.widthStat < 90) ? "#F6DE51" : "#53CD5B"};
    border-bottom: 1px solid #F0F0F0;
}
gap: 0.5rem;

`

export const InfoDiv = styled.div`
grid-column: 3/4;
height: 100%;
display: grid;
padding: 1rem;
gap: 1rem;
grid-template-rows: 1fr 3fr;
color: white;


& div:nth-child(1){
    display: grid;
    gap: 0.5rem;
    background-color: unset;
  
    
    p:nth-child(2){
        text-transform: capitalize;
        font-size: 2rem;
        width: 100%;
    }
    img{
        height: 30px;
        margin-left: 0.5rem;
    }
}
&     div:nth-child(2){
        background-color: white;
        padding: 1rem;
    }
    @media (max-width: 1220px) {
   grid-row: 1/1;
   grid-column: 1/2;
}
@media (max-width: 768px) {
   grid-row: 1/1;
   grid-column: 1/1;
}
`
export const MovesTag = styled.span`
border-radius: 0.5rem;
background-color: #ECECEC;
border: 2px dashed #DBDBDB;
color: black;
padding: 0.5rem 1rem;
height: fit-content;
width: fit-content;

`
export const MovesHolder = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
padding: 1rem;
border-radius: 0.5rem;

`

export const PokeImageDiv = styled.div`
grid-column: 4/5;
height: 100%;
img{

    aspect-ratio: 1/1.5;
    width: 16.88rem;
    height: 16.88rem;
    float: right;
    transform: translateY(-50%);
    position: relative;
}
@media (max-width: 1220px) {
   grid-row: 2/2;
   grid-column: 2/3;
   img{
    transform: translateY(50%) translateX(-25%);

   }
}
@media (max-width: 768px) {
   grid-row: 4/4;
   grid-column: 1/1;

}
`

