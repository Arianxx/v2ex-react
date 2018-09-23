import {getRequest, normalFetchData, normalFetchSuccess, urls} from "../../utils/utils";

const initialState = {
  nodes: {
    id: {}, // 以节点id为键，节点对象为值的字典
    name: {} // 以节点名为键，节点对象为值的字典
  },
  node: "", // 节点id值，对应nodes.id中的一个节点对象
  topics: {
    node_id: {},
    node_name: {}
  } // 节点对应的主题对象
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
  let nodes = {
    ...state.nodes
  };
  let topics = {
    ...state.topics
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
        node: d.id,
        nodes: nodes
      };
    case types.GET_NODE_TOPICS_BY_ID:
    case types.GET_NODE_TOPICS_BY_NAME:
      topics = putTopics(action.data, topics);
      return {
        topics: topics
      };
    default:
      return state;
  }
};

export default reducer;


// selectors
export const getAllNodes = state => {
  return state.node.nodes.id;
};

export const getNodeInfoByName = (state, name) => {
  return state.node.nodes.name[name];
};

export const getNodeInfoById = (state, id) => {
  return state.node.nodes.id[id];
};

export const getNodeTopicsById = (state, id) => {
  return state.node.topics.node_id[id];
};

export const getNodeTopicsByName = (state, name) => {
  return state.node.topics.node_name[name];
};