import {combineReducers} from 'redux';
import site from './site';
import node from './node';


const rootReducer = combineReducers({
  site,
  node
});

export default rootReducer;