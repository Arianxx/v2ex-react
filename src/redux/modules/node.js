import {getRequest, normalFetchData, normalFetchSuccess, urls} from "../../utils/api";

const initialState = {
  nodeInfo: {},
  nodes: [],
  topics: []
};


export const types = {
  GET_ALL_NODES: 'NODE/GET_ALL_NODES',  // 获取所有节点
  GET_NODE_INFO_BY_ID: 'NODE/GET_NODE_INFO_BY_ID',  // 根据ID获取节点
  GET_NODE_INFO_BY_NAME: 'NODE/GET_NODE_INFO_BY_NAME',  // 根绝名称获取节点
  GET_NODE_TOPICS_BY_ID: 'NODE/GET_NODE_TOPICS_BY_ID', // 根据node id获取其所有主题
  GET_NODE_TOPICS_BY_NAME: 'NODE/GET_NODE_TOPICS_BY_NAME' // 根据node name获取其所有主题
};


// action creators
const successActions = {
  getAllNodeSuccess: normalFetchSuccess(types.GET_ALL_NODES),

  getNodeInfoByIdSuccess: normalFetchSuccess(types.GET_NODE_INFO_BY_ID),

  getNodeInfoByNameSuccess: normalFetchSuccess(types.GET_NODE_INFO_BY_NAME),

  getNodeTopicsByIdSuccess: normalFetchSuccess(types.GET_NODE_TOPICS_BY_ID),

  getNodeTopicsByNameSuccess: normalFetchSuccess(types.GET_NODE_TOPICS_BY_NAME),
};

const fetchActions = {
  getAllNodes: normalFetchData(successActions.getAllNodeSuccess, () => getRequest(urls.getAllNodes)),

  getNodeInfoById: normalFetchData(successActions.getNodeInfoByIdSuccess, params => getRequest(urls.getNodeInfo, params)),

  getNodeInfoByName: normalFetchData(successActions.getNodeInfoByNameSuccess, params => getRequest(urls.getNodeInfo, params)),

  getNodeTopicsById: normalFetchData(successActions.getNodeTopicsByIdSuccess, params => getRequest(urls.getTopicInfo, params)),

  getNodeTopicsByName: normalFetchData(successActions.getNodeTopicsByNameSuccess, params => getRequest(urls.getTopicInfo, params)),
};

export const actions = {...fetchActions, ...successActions};


const putTopics = (data, topics) => {
  if (data) {
    data.forEach(d => {
      if (!topics.node_id[d.node.id]) {
        topics.node_id[d.node.id] = {}
      }
      if (!topics.node_name[d.node.name]) {
        topics.node_name[d.node.name] = {}
      }

      topics.node_id[d.node.id][d.id] = d;
      topics.node_name[d.node.name][d.id] = d;
    })
  }
  return topics;
};

// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_NODES:
      return {
        ...state,
        nodes: action.data
      };
    case types.GET_NODE_INFO_BY_NAME:
    case types.GET_NODE_INFO_BY_ID:
      return {
        ...state,
        nodeInfo: action.data
      };
    case types.GET_NODE_TOPICS_BY_ID:
    case types.GET_NODE_TOPICS_BY_NAME:
      return {
        ...state,
        topics: action.data
      };
    default:
      return state;
  }
};

export default reducer;


// selectors
export const getAllNodes = state => {
  return state.node.nodes;
};

export const getNodeInfoByName = (state) => {
  return state.node.nodeInfo;
};

export const getNodeInfoById = (state) => {
  return state.node.nodeInfo;
};

export const getNodeTopicsById = (state) => {
  return state.node.topics;
};

export const getNodeTopicsByName = (state) => {
  return state.node.topics;
};

// 之前有过更复杂的state，重构时觉得不需要就简化了逻辑。
// 但是为了避免到处改调用名称，保留了以前的函数名。因此存在这几个名称不同但做的事相同的函数。