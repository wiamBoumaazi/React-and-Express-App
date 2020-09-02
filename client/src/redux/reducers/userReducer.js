const INITIAL_STATE = {
    loadingState: 'init',
    year: '',
    response: 'will be displayed here',
  };
  
  const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'USER_SET_RESPONSE':
        return {
          ...state,
          response: action.response,
        };
      case 'USER_SET_YEAR':
        return {
          ...state,
          year: action.year,
        };
      case 'USER_SET_LOADING_STATE':
        return {
          ...state,
          loadingState: action.loadingState,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;