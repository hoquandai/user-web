import { connect } from 'react-redux';
import Profile from '../components/Profile';
import { getUser } from '../actions';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getUser: response => dispatch(getUser(response))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
