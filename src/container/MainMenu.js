import { connect } from 'react-redux';
import MainMenu from '../components/MainMenu';

import { actionslogOut } from '../actions/user.actions';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(actionslogOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
