const detailTutor = (state = {}, action) => {
    switch (action.type) {
      case 'GET_DETAIL':
        return action.payload.detailTutor;
      default:
        return state;
    }
  };
  export default detailTutor;
  