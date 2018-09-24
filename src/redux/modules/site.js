import {getRequest, normalFetchData, normalFetchSuccess, urls} from "../../utils/api";


const initialState = {
  siteInfo: {},
  siteStats: {},
};


export const types = {
  GET_SITE_INFO: 'APP/GET_SITE_INFO', // 获取网站信息
  GET_SITE_STATES: 'APP/GET_SITE_STATES', // 获取网站状态
};


// action creators
const successActions = {
  getSiteInfoSuccess: normalFetchSuccess(types.GET_SITE_INFO),

  getSiteStateSuccess: normalFetchSuccess(types.GET_SITE_STATES),
};

const fetchActions = {
  getSiteInfo: normalFetchData(successActions.getSiteInfoSuccess, () => getRequest(urls.getSiteInfo)),

  getSiteState: normalFetchData(successActions.getSiteStateSuccess, () => getRequest(urls.getSiteState)),
};

export const actions = {...successActions, ...fetchActions};


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