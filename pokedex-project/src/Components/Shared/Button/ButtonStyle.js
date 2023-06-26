import styled from "styled-components";

export const ButtonStyle = styled.button`
z-index: 1;
border: none;
padding: 0.5rem 4.69rem;
background-color: ${(props) => props.color};
color: ${(props) => props.color && `white`}
`