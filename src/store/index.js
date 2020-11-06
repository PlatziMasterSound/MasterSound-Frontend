//------------------------------ import libraries
import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

// Import and combine reducers
import { songReducer } from '../reducer/songReducer';
import { favoriteReducer } from '../reducer/favoriteReducer';

const rootReducer = combineReducers({
  songReducer, favoriteReducer,
});


// Get the enhancer to redux devtools
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Made a function that return the store
export function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
}
