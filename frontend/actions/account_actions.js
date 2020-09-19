import {createaccount} from '../util/account_api_util'
export const RECEIVE_ACCOUNT = 'RECEIVE_ACCOUNT'

const receiveAccount = account => ({
  type: RECEIVE_ACCOUNT,
  account
})

export const createAccount = account => (
  createaccount(account).then(account =>dispatch(receiveAccount(account)))
)