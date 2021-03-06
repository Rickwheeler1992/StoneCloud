import { login, signup, loginGuest, receiveErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.currentUser ? true : false,
    errors: state.session.errors,
    formType: ownProps.location.pathname.endsWith('n') ? '/signup' : '/login',
    altAction: ownProps.location.pathname.endsWith('n') ? "Create Account" : "Sign In",
    actionType: ownProps.location.pathname.endsWith('n') ? "Sign In" : "Create Account"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: ownProps.location.pathname.endsWith('n') ?
    (user) => dispatch(login(user)) :
    (user) => dispatch(signup(user)),
    loginGuest: () => dispatch(loginGuest()),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
