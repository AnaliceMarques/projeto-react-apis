export const getColors = (type) => {
  switch (type) {
    case "bug":
      return "#76A866";
    case "dark":
      return "#5C5365";
    case "dragon":
      return "#0A6CBF";
    case "electric":
      return "#F7E076";
    case "fairy":
      return "#EC8FE6";
    case "fighting":
      return "#CE4069";
    case "fire":
      return "#EAAB7D";
    case "flying":
      return "#6892B0";
    case "ghost":
      return "#5269AC";
    case "grass":
      return "#729F92";
    case "ground":
      return "#E4A07D";
    case "ice":
      return "#74CEC0";
    case "normal":
      return "#BF9762";
    case "poison":
      return "#C690C6";
    case "psychic":
      return "#F67176";
    case "rock":
      return "#C7B78B";
    case "steel":
      return "#BBBBBB";
    case "water":
      return "#71C3FF";
    default:
      return "#8A8A8A";
  }
};