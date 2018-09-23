const initialState = {
  pageLoading: true
};


// action types
export const types = {
  START_REQUEST: 'APP/START_REQUEST', // 开始发送请求
  FINISH_REQUEST: 'APP/FINISH_REQUEST', // 结束请求
  ERROR_REQUEST: 'APP/ERROR_REQUEST', //请求出错

  START_PAGE_LOADING: 'APP/START_PAGE_LOADING',
  END_PAGE_LOADING: 'APP/END_PAGE_LOADING',
};


// action creators
export const actions = {
  startRequest: (component) => {
    component && component.setState && component.setState({
      loading: true,
      error: false
    });

    return {
      type: types.START_REQUEST
    }
  },

  finishRequest: (component) => {
    component && component.setState && component.setState({
      loading: false,
      error: false
    });

    return {
      type: types.FINISH_REQUEST
    }
  },

  requestError: (component, error) => {
    component && component.setState && component.setState({
      loading: false,
      error: error,
    });

    return {
      type: types.ERROR_REQUEST
    }
  },

  startPageLoading: () => {
    return {
      type: types.START_PAGE_LOADING
    }
  },

  endPageLoading: () => {
    return {
      type: types.END_PAGE_LOADING
    }
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_PAGE_LOADING:
      return {
        pageLoading: true
      };
    case types.END_PAGE_LOADING:
      return {
        pageLoading: false
      };
    default:
      return initialState;
  }
};

export default reducer;


export const getPageLoadingState = state => state.app.pageLoading;