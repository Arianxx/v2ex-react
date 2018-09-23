import {combineReducers} from 'redux';
import site from './site';
import node from './node';
import topic from './topic';
import reply from './reply';
import user from './user'


const rootReducer = combineReducers({
  site,
  node,
  topic,
  reply,
  user
});

export default rootReducer;