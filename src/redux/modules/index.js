import {combineReducers} from 'redux';
import app from './app';
import site from './site';
import node from './node';
import topic from './topic';
import reply from './reply';
import user from './user'


const rootReducer = combineReducers({
  app,
  site,
  node,
  topic,
  reply,
  user
});

export default rootReducer;