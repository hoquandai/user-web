const user = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER': {
      localStorage.setItem('userStorage', action.payload.user);
      return action.payload.user;
    }

    case 'LOGIN_FAILED':
      return { message: action.payload.message };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
export default user;
