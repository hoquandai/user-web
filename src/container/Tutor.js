import { connect } from 'react-redux';
import TuTor from '../components/Tutor';
import { getDetailTutor } from '../actions';

const mapDispatchToProps = dispatch => ({
  getDetailTutor: idTutor => dispatch(getDetailTutor(idTutor))
});

export default connect(mapDispatchToProps)(TuTor);
