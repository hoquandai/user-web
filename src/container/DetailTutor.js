import { connect } from 'react-redux';
import DetailTutor from '../components/DetailTutor';
import { hire } from '../actions';

const mapStateToProps = state => ({
  detailTutor: state.detailTutor
});

const mapDispatchToProps = dispatch => ({
  hire: contract => dispatch(hire(contract))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailTutor);
