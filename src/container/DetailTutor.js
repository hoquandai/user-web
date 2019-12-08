import { connect } from 'react-redux';
import DetailTutor from '../components/DetailTutor';

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(DetailTutor);
