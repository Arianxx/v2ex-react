import {urls, getRequest, normalFetchData, normalFetchSuccess} from "../../utils/utils";


const initialState = {
  member: {},
  memberTopics: []
};


export const types = {
  GET_MEMBER_INFO: 'USER/GET_MEMBER_INFO',
  GET_MEMBER_TOPICS: 'USER/GET_MEMBER_TOPICS'
};


// action creators
const successActions = {
  getMemberInfoSuccess: normalFetchSuccess(types.GET_MEMBER_INFO),

  getMemberTopicsSuccess: normalFetchSuccess(types.GET_MEMBER_TOPICS),
};

const fetchActions = {
  getMemberInfo: normalFetchData(successActions.getMemberInfoSuccess, param => getRequest(urls.getMemberInfo, param)),

  getMemberTopic: normalFetchData(successActions.getMemberTopicsSuccess, param => getRequest(urls.getTopicInfo, param)),
};

export const actions = {...successActions, ...fetchActions};


// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MEMBER_INFO:
      return {
        member: action.data
      };
    case types.GET_MEMBER_TOPICS:
      return {
        memberTopics: action.data
      };
    default:
      return state;
  }
};

export default reducer;


// selector
export const getMemberInfo = state => state.user.member;

export const getMemberTopics = state => state.user.memberTopics;
