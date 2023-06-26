export const getColors = (type) => {


    switch (type) {
        case "bug":
            return "#76A866";
        case "dark":
            return "#705746";
        case "dragon":
            return "#6F35FC";
        case "electric":
            return "#F7D02C";
        case "fairy":
            return "#D685AD";
        case "fighting":
            return "#C22E28";
        case "fire":
            return "#EAAB7D";
        case "flying":
            return "#A98FF3";
        case "ghost":
            return "#735797";
        case "grass":
            return "#729F92";
        case "ground":
            return "#E2BF65";
        case "ice":
            return "#96D9D6";
        case "normal":
            return "#A8A77A";
        case "poison":
            return "#A33EA1";
        case "psychic":
            return "#E14C7A";
        case "rock":
            return "#B6A136";
        case "steel":
            return "#B7B7CE";
        case "water":
            return "#6390F0";
        default:
            return "#8A8A8A";
    }
};
