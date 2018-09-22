import {getRequest, normalFetchData, normalFetchSuccess, urls} from "../../utils/utils";


const initialState = {
  nodes: {
    id: {},
    name: {}
  },
  node: {}
};


export const types = {
  GET_ALL_NODES: 'NODE/GET_ALL_NODES',  // 获取所有节点
  GET_NODE_INFO_BY_ID: 'NODE/GET_NODE_INFO_BY_ID',  // 根据ID获取节点
  GET_NODE_INFO_BY_NAME: 'NODE/GET_NODE_INFO_BY_NAME',  // 根绝名称获取节点
};


// action creators
const successActions = {
  getAllNodeSuccess: normalFetchSuccess(types.GET_ALL_NODES),

  getNodeInfoByIdSuccess: normalFetchSuccess(types.GET_NODE_INFO_BY_ID),

  getNodeInfoByNameSuccess: normalFetchSuccess(types.GET_NODE_INFO_BY_NAME),
};

const fetchActions = {
  getAllNodes: normalFetchData(successActions.getAllNodeSuccess, () => getRequest(urls.getAllNodes)),

  getNodeInfoById: normalFetchData(successActions.getNodeInfoByIdSuccess, params => getRequest(urls.getNodeInfo, params)),

  getNodeInfoByName: normalFetchData(successActions.getNodeInfoByNameSuccess, params => getRequest(urls.getNodeInfo, params)),
};

export const actions = {...fetchActions, ...successActions};


// reducers
const reducer = (state = initialState, action) => {
  let nodes = {
    ...state.nodes
  };
  switch (action.type) {
    case types.GET_ALL_NODES:
      nodes = {
        id: {},
        name: {},
      };
      action.data && action.data.forEach(d => {
        nodes.id[d.id] = d;
        nodes.name[d.name] = d;
      });
      return {
        nodes: nodes
      };
    case types.GET_NODE_INFO_BY_NAME:
    case types.GET_NODE_INFO_BY_ID:
      const d = action.data || {};
      if (d) {
        nodes.id[d.id] = d;
        nodes.name[d.name] = d;
      }
      return {
        node: d,
        nodes: nodes
      };
    default:
      return state;
  }
};

export default reducer;


// selectors
export const getAllNodes = state => {
  const nodes = [];
  Object.keys(state.node.nodes.id).forEach(id => nodes.push(state.node.nodes[id]));
  return nodes;
};

export const getNodeInfoByName = (state, name) => {
  return state.node.nodes.name[name];
};

export const getNodeInfoById = (state, id) => {
  return state.node.nodes.id[id];
};