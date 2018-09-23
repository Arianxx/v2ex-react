import {urls, getRequest, normalFetchData, normalFetchSuccess} from '../../utils/utils'


const initialState = {
  replies: []
};


export const types = {
  GET_TOPIC_REPLIES: 'REPLY/GET_TOPIC_REPLIES'
};


// action creators
const successActions = {
  getTopicRepliesSuccess: normalFetchSuccess(types.GET_TOPIC_REPLIES),
};

const fetchActions = {
  getTopicReplies: normalFetchData(successActions.getTopicRepliesSuccess, params => getRequest(urls.getReplies, params)),
};

export const actions = {...successActions, ...fetchActions};


// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TOPIC_REPLIES:
      return {
        replies: action.data
      };
    default:
      return state
  }
};

export default reducer;


// selectors
export const getReplies = state => state.reply.replies;
