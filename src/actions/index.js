import fetch from 'cross-fetch';

export const receiveUser = user => ({
  type: 'RECEIVE_USER',
  payload: {
    user
  }
});

export const getUser = response => {
  let res = true;
  return dispatch => {
    fetch(
      'https://stormy-ridge-33799.herokuapp.com/users/' +
        response.user_id +
        '/?token=' +
        response.token,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
      .then(response => {
        if (response.status !== 200) {
          res = false;
        }
        return response.json();
      })
      .then(response => {
        if (res) {
          localStorage.setItem('user', JSON.stringify(response.data));
          dispatch(receiveUser(response.data));
        } else {
          dispatch(loginFailed(response.message));
        }
      });
  };
};

export const loginFailed = message => ({
  type: 'LOGIN_FAILED',
  payload: {
    message
  }
});

export const callAPILogin = (email, password) => {
  let res = true;
  return dispatch => {
    fetch('https://stormy-ridge-33799.herokuapp.com/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        email,
        password
      })
    })
      .then(response => {
        if (response.status !== 200) {
          res = false;
        }
        return response.json();
      })
      .then(response => {
        if (res) {
          localStorage.setItem('userToken', JSON.stringify(response));
          dispatch(getUser(response));
        } else {
          dispatch(loginFailed(response.message));
          // window.location.href = '/login';
        }
      });
  };
};

export const changeInfo = (token, id, user) => {
  let res = true;
  return dispatch => {
    fetch('https://stormy-ridge-33799.herokuapp.com/users/' + id, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        token,
        user
      })
    })
      .then(response => {
        if (response.status !== 200) {
          res = false;
        }
        return response.json();
      })
      .then(response => {
        if (res) {
          dispatch(getUser({ token: token, user_id: id }));
        }
      });
  };
};

export const actionslogOut = () => ({
  type: 'LOGOUT',
  payload: {
    user: null
  }
});

export const receiveDetailTutor = detailTutor => ({
  type: 'GET_DETAIL',
  payload: {
    detailTutor
  }
});

export const getDetailTutor = idTutor => {
  let res = true;
  return dispatch => {
    fetch('https://stormy-ridge-33799.herokuapp.com/tutors/' + idTutor, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status !== 200) {
          res = false;
        }
        return response.json();
      })
      .then(response => {
        if (res) {
          dispatch(receiveDetailTutor(response.data));
        }
      });
  };
};

export const hire = contract => {
  let res = true;
  return dispatch => {
    fetch('https://stormy-ridge-33799.herokuapp.com/contracts', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        contract
      })
    })
      .then(response => {
        if (response.status !== 200) {
          res = false;
        }
        return response.json();
      })
      .then(response => {
        if (res) {
          console.log('--------oke');
        }
      });
  };
};
