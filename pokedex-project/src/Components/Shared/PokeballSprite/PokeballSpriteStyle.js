import styled, { keyframes } from "styled-components";
import { pokeballSprite } from "../../../script/pokeballSprite"

const pokeballAnimation = keyframes`
0%{
    background-image: url(${pokeballSprite.sprite01});
    visibility: initial;
}
1.6%{
    background-image: url(${pokeballSprite.sprite02});
}
3.2%{
    background-image: url(${pokeballSprite.sprite03});
}
4.8%{
    background-image: url(${pokeballSprite.sprite04});
}
6.4%{
    background-image: url(${pokeballSprite.sprite05});
}
8%{
    transform: translate(-50%, 50%);
    background-image: url(${pokeballSprite.sprite07});
}
9.6%{
    background-image: url(${pokeballSprite.sprite08});
}
11.2%{
    background-image: url(${pokeballSprite.sprite09});
}
12.8%{
    background-image: url(${pokeballSprite.sprite10});
}
14.4%{
    background-image: url(${pokeballSprite.sprite11});
}
16%{
    background-image: url(${pokeballSprite.sprite12});
}
17.6%{
    background-image: url(${pokeballSprite.sprite13});
}
19.2%{
    background-image: url(${pokeballSprite.sprite14});
}
20.8%{
    background-image: url(${pokeballSprite.sprite15});
}
22.4%{
    background-image: url(${pokeballSprite.sprite16});
}
24%{
    background-image: url(${pokeballSprite.sprite17});
}
25.6%{
    background-image: url(${pokeballSprite.sprite18});
}
27.2%{
    background-image: url(${pokeballSprite.sprite19});
}
28.8%{
    background-image: url(${pokeballSprite.sprite20});
}
30.4%{
    background-image: url(${pokeballSprite.sprite27});
}
32%{
    background-image: url(${pokeballSprite.sprite28});
}
33.6%{
    background-image: url(${pokeballSprite.sprite29});
}
35.2%{
    background-image: url(${pokeballSprite.sprite30});
}
36.8%{
    background-image: url(${pokeballSprite.sprite31});
}
38.4%{
    background-image: url(${pokeballSprite.sprite31});
}
40%{
    background-image: url(${pokeballSprite.sprite03});
    transform: translate(-50%,50%);
}
100%{
    background-image: url(${pokeballSprite.sprite03});
    transform: translate(-50%,50%);
}
`
const pokeballAnimationBroken = keyframes`
0%{
    background-image: url(${pokeballSprite.sprite01});
    visibility: initial;
}
1.6%{
    background-image: url(${pokeballSprite.sprite02});
}
3.2%{
    background-image: url(${pokeballSprite.sprite03});
}
4.8%{
    background-image: url(${pokeballSprite.sprite04});
}
6.4%{
    background-image: url(${pokeballSprite.sprite05});
}
8%{
    transform: translate(-50%, 50%);
    background-image: url(${pokeballSprite.sprite07});
}
9.6%{
    background-image: url(${pokeballSprite.sprite08});
}
11.2%{
    background-image: url(${pokeballSprite.sprite09});
}
12.8%{
    background-image: url(${pokeballSprite.sprite10});
}
14.4%{
    background-image: url(${pokeballSprite.sprite11});
}
16%{
    background-image: url(${pokeballSprite.sprite12});
}
17.6%{
    background-image: url(${pokeballSprite.sprite13});
}
19.2%{
    background-image: url(${pokeballSprite.sprite14});
}
20.8%{
    background-image: url(${pokeballSprite.sprite15});
}
22.4%{
    background-image: url(${pokeballSprite.sprite16});
}
24%{
    background-image: url(${pokeballSprite.sprite17});
}
25.6%{
    background-image: url(${pokeballSprite.sprite18});
}
27.2%{
    background-image: url(${pokeballSprite.sprite19});
}
28.8%{
    background-image: url(${pokeballSprite.sprite20});
}
30.4%{
    background-image: url(${pokeballSprite.sprite21});
}
32%{
    background-image: url(${pokeballSprite.sprite22});
}
33.6%{
    background-image: url(${pokeballSprite.sprite23});
}
35.2%{
    background-image: url(${pokeballSprite.sprite24});
}
36.8%{
    background-image: url(${pokeballSprite.sprite25});
}
38.4%{
    background-image: url(${pokeballSprite.sprite26});
}
40%{
    background-image: url(${pokeballSprite.sprite26});
    transform: translate(-50%,50%);
}
100%{
    background-image: url(${pokeballSprite.sprite26});
    transform: translate(-50%,50%);
}
`

export const PokeballSpriteAnim = styled.div`
    width: 50px;
    height: 50px;
    background-image: url(${pokeballSprite.sprite01});
    background-size: contain;
    animation: ${(props) => props.caught ? pokeballAnimation : pokeballAnimationBroken} 5s linear 1s;
    visibility: hidden;
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-200%,50%);
`

