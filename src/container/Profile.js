import { connect } from 'react-redux';
import Profile from '../components/Profile';
import { getUser, changeInfo } from '../actions';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getUser: response => dispatch(getUser(response)),
  changeInfo: (token, id, user) => dispatch(changeInfo(token, id, user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
