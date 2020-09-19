import { RECEIVE_ACCOUNT} from "../actions/account_actions"

const accountsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ACCOUNT:
      return Object.assign({}, state, {[action.account.id]: action.account})
    default:
      return state;  
  }
}

export default accountsReducer;