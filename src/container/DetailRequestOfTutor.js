import { connect } from 'react-redux';
import DetailRequestOfTutor from '../components/DetailRequestOfTutor';
import { updateContract } from '../actions';

const mapDispatchToProps = dispatch => ({
  updateContract: (token, idContract, contract) =>
    dispatch(updateContract(token, idContract, contract))
});

export default connect(null, mapDispatchToProps)(DetailRequestOfTutor);
