import {fetchData, getRequest, urls} from "../../utils/api";


const initialState = {
  siteInfo: {},
  siteStats: {},
};


export const types = {
  GET_SITE_INFO: 'APP/GET_SITE_INFO', // 获取网站信息
  GET_SITE_STATES: 'APP/GET_SITE_STATES', // 获取网站状态
};


// action creators
export const actions = {
  getSiteInfo: (component) => {
    return fetchData(component, actions.getSiteInfoSuccess, getRequest(urls.getSiteInfo));
  },

  getSiteInfoSuccess: (data) => {
    return {
      type: types.GET_SITE_INFO,
      data: data
    }
  },

  getSiteState: (component) => {
    return fetchData(component, actions.getSiteStateSuccess, getRequest(urls.getSiteState));
  },

  getSiteStateSuccess: (data) => {
    return {
      type: types.GET_SITE_STATES,
      data: data
    }
  }
};


// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SITE_INFO:
      return {
        siteInfo: action.data
      };
    case types.GET_SITE_STATES:
      return {
        siteStats: action.data
      };
    default:
      return state;
  }
};


export default reducer;


// selectors
export const getSiteInfo = state => state.site.siteInfo;
export const getSiteStats = state => state.site.siteStats;