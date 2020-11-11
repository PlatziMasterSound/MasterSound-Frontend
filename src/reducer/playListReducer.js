const initialState = {
    playlist: '',
  };
  
  export const playListReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case 'SET_PLAYLIST':
        return { ...state, favorite: payload };
  
      default:
        return state;
    }
  };