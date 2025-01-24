// src/store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import utilisateursReducer from './ReduxUtilisateur/reducerUser';
import recettesReducer from './ReduxRcette/reduerRecette';
import likesReducer from './ReduxLikes/reducerLikes';
import suivisReducer from './ReduxFollowers/reducerFollowers';
import favorisReducer from './ReduxFavoris/reducerFavoris';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: utilisateursReducer,
  recette: recettesReducer,
  likes: likesReducer,
  suivs: suivisReducer,
  favoris: favorisReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
