import { combineReducers } from 'redux';
import StocksReducer from './reducer_stocks';
import NewsReducer from './reducer_news';

const rootReducer = combineReducers({
  stock: StocksReducer,
  stockNews: NewsReducer
});

export default rootReducer;
