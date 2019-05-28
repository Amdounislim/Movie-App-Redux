import { ADD_MOVIE } from "../actions/actionsType";

const missionimpossible = {title: "Mission impossible : Fallout", 
                          image: "http://fr.web.img5.acsta.net/pictures/18/05/14/16/32/0850449.jpg",
                          description:"2018 ‧ Thriller/Action ‧ 2h 28m",
                          rating: 3}
const astar = {title: "A Star Is Born", 
              image: "https://images-na.ssl-images-amazon.com/images/I/71Lp8ou83VL._SL1400_.jpg",
              description:"2018 ‧ Drame/Film d'amour ‧ 2h 14m",
              rating: 4}
const black = {title: "Black Panther", 
              image: "http://fr.web.img2.acsta.net/pictures/17/10/16/15/40/0883250.jpg",
              description:"2018 ‧ Cinéma de fantasy/Film de science-fiction ‧ 2h 15m",
              rating: 5}
const moviesToDisplay = [missionimpossible, astar, black]

function Moviereducer(state = moviesToDisplay, action) {
  if (action.type === ADD_MOVIE) {
    return state.concat(action.payload);
  }
  return state;
}

export default Moviereducer;
