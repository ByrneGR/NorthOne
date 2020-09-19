export const createaccount = (account) => {
  return $.ajax({
    url: 'accounts',
    method: 'POST',
    data: account
  })
}