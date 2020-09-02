// setUser('hello') -> {type: 'USER_SET_USER', user: 'hello'}

export const setYear = year => ({
    type: 'USER_SET_YEAR',
    year,
  });
  
  export const setLoadingState = loadingState => ({
    type: 'USER_SET_LOADING_STATE',
    loadingState,
  });
  
  export const setResponse = response=> ({
    type: 'USER_SET_RESPONSE',
    response,
  });
  
  export const buttonClicked = () => (dispatch, getState) => {
    const reduxEvent = setLoadingState('loading');
    dispatch(reduxEvent);
    const year = getState().userReducer.year;
    const url = `/api/LBrahmadevara/popularmovie?year=${year}`;
    setTimeout(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        if(data.Status === 'OK'){
          dispatch(setLoadingState('init'));
          dispatch(setResponse(data.response));
        }
        else{
          console.log(data.response);
          dispatch(setLoadingState('error'));
          dispatch(setResponse(data.response));
        }
      })
      .catch(console.log);
    }, 1500);
  };
  