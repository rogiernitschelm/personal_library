import { combineReducers } from 'redux';
import ItemsReducer from './items_reducer';

const mainReducer = combineReducers({
  items: ItemsReducer
});

export default mainReducer
