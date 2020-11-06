const initialState = {
    favorite: '',
  };
  
  export const favoriteReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case 'SET_FAVORITE':
        return { ...state, favorite: payload };
  
      default:
        return state;
    }
  };
  