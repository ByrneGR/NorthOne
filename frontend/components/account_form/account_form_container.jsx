import { connect } from "react-redux";
import { createAccount } from "../../actions/account_actions";
import AccountForm from "./account_form";

const msp = (state) => { 
  return {
  accounts: state.accounts
  }
};

const mdp = (dispatch) => ({
  createAccount: (account) => dispatch(createAccount(account)),
});

export default connect(msp, mdp)(AccountForm);