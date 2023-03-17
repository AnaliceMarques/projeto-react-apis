import bug from "../image/types/bug.png";
import dark from "../image/types/dark.png";
import dragon from "../image/types/dragon.png";
import electric from "../image/types/electric.png";
import fairy from "../image/types/fairy.png";
import fighting from "../image/types/fighting.png";
import fire from "../image/types/fire.png";
import flying from "../image/types/flying.png";
import ghost from "../image/types/ghost.png";
import grass from "../image/types/grass.png";
import ground from "../image/types/ground.png";
import ice from "../image/types/ice.png";
import normal from "../image/types/normal.png";
import poison from "../image/types/poison.png";
import psychic from "../image/types/psychic.png";
import rock from "../image/types/rock.png";
import steel from "../image/types/steel.png";
import water from "../image/types/water.png";

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
      return "Tipo não definido";
  }
};
