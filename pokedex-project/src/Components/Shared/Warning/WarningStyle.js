import styled, { keyframes } from "styled-components";
export const ModalHolder = styled.section`
width: 100vw;
height: 100vh;
position: fixed;
z-index: 10;
`
export const WarningModal = styled.div`
width: 20.75rem;
height: calc(18.75rem/2);
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background-color: white;
border-radius: 1rem;
z-index: 6;
color: black;
padding: 1rem;
display: grid;
justify-content: center;
justify-items: center;
span{display:inline-flex;
    h4{
        text-transform: capitalize;
        margin-left: 0.4rem;
    }}

`

const PokeAnimKeyframe = keyframes`
0%{
    visibility: hidden;
}
100%{
    visibility: hidden;
}
`
export const PokeAnim = styled.img`

animation: ${PokeAnimKeyframe} 3.5s 1.5s ;
`

const CaughtText = keyframes`
0%{
    visibility: unset;
}
100%{
    visibility: unset;
}
`

export const CaughtTextStyle = styled.span`
visibility: hidden;
animation: ${CaughtText} 3s;
animation-delay: 3s;
display: inline-flex;
`