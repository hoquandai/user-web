const user = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER':
      return action.payload.user;
    case 'LOGIN_FAILED':
      return { message: action.payload.message };
    case 'LOGOUT':
      return {
        user: null
      };
    default:
      return state;
  }
};
export default user;
