import { FILTER_RATING } from "../actions/actionsType";
export const minRating = 1;
function Ratingreducer(state = minRating, action) {
  if (action.type === FILTER_RATING) {
    return action.payload;
  }
  return state;
}

export default Ratingreducer;