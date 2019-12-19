import { connect } from 'react-redux';
import DetailTutor from '../components/DetailTutor';

const mapStateToProps = state => ({
  detailTutor: state.detailTutor
});

export default connect(mapStateToProps)(DetailTutor);
