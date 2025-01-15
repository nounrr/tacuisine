
import { createStore} from 'redux';
// Importe les reducers
import ReducerProduits from './ReducerEcomerce';
/*const rootReducer = combineReducers({
   ReducerProduits,
});*/

const store = createStore(ReducerProduits);

export default store;