import { FETCH_STOCKS } from '../actions/index';

export default function(state = 0, action){
  switch(action.type) {
    case FETCH_STOCKS:
      return action.payload;
  }
  return state;
}
