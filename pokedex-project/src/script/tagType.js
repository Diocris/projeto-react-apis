import bug from "../assets/bugtype.png";
import dark from "../assets/darktype.png";
import dragon from "../assets/dragontype.png";
import electric from "../assets/electrictype.png";
import fairy from "../assets/fairytype.png";
import fighting from "../assets/fightingtype.png";
import fire from "../assets/firetype.png";
import flying from "../assets/flyingtype.png";
import ghost from "../assets/ghosttype.png";
import grass from "../assets/grasstype.png";
import ground from "../assets/groundtype.png";
import ice from "../assets/icetype.png";
import normal from "../assets/normaltype.png";
import poison from "../assets/poisontype.png";
import psychic from "../assets/psychictype.png";
import rock from "../assets/rocktype.png";
import steel from "../assets/steeltype.png";
import water from "../assets/watertype.png";

export const getTypes = (type) => {
    switch (type) {
        case "bug":
            return bug;
        case "dark":
            return dark;
        case "dragon":
            return dragon;
        case "electric":
            return electric;
        case "fairy":
            return fairy;
        case "fighting":
            return fighting;
        case "fire":
            return fire;
        case "flying":
            return flying;
        case "ghost":
            return ghost;
        case "grass":
            return grass;
        case "ground":
            return ground;
        case "ice":
            return ice;
        case "normal":
            return normal;
        case "poison":
            return poison;
        case "psychic":
            return psychic;
        case "rock":
            return rock;
        case "steel":
            return steel;
        case "water":
            return water;
        default:
            return water;
    }
};

