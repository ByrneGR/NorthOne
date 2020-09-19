import { combineReducers } from 'redux';
import accountsReducer from './accounts_reducer';

const rootReducer = combineReducers({
  accounts: accountsReducer,
});

export default rootReducer;