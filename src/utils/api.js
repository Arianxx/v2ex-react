import {actions as stateActions} from '../redux/modules/app';
import {store} from "../redux/store";


export const urls = {
  // SITE
  getSiteInfo: '/api/site/info.json',
  getSiteState: '/api/site/stats.json',

  // NODE
  getAllNodes: '/api/nodes/all.json',
  getNodeInfo: '/api/nodes/show.json',

  // TOPIC
  getNewestTopics: '/api/topics/latest.json',
  getHotTopics: '/api/topics/hot.json',
  getTopicInfo: '/api/topics/show.json',

  // REPLIES
  getReplies: '/api/replies/show.json',

  // MEMBERS
  getMembersInfo: '/api/members/show.json',
};


export const getRequest = (url, params = [], others = {}) => {
  url += '?';
  const paramsArray = [];
  Object.keys(params).forEach((name) => paramsArray.push('name' + '=' + params[name]));
  url += paramsArray.join('&');
  return new Request(url, others);
};


export const fetchData = (component, successAction, request) => {
  store.dispatch(stateActions.startRequest(component));
  return async () => {
    try {
      const res = await fetch(request);
      const data = await res.json();

      store.dispatch(stateActions.finishRequest(component));
      store.dispatch(successAction(data));
    } catch (err) {
      store.dispatch(stateActions.requestError(component));
    }
  }
};