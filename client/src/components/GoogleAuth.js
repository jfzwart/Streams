import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {
  // state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '199654660584-behg6kh464dv7m8mvc986188u4oh670d.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange); //checks if user is signed in and rerenders the component
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }
    // this.setState({ isSignedIn: this.auth.isSignedIn.get()})
  //updates the status upon changing the status without refreshing the page.

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null ) {
      return null
      } else if (this.props.isSignedIn) {
          return (
              <button onClick={this.onSignOutClick} className="ui red google button">
                <i className="google icon" />
                Sign Out
              </button>
            );
        }   else {
          return (
              <button onClick={this.onSignInClick}className="ui red google button">
                <i className="google icon" />
                Sign In With Google
              </button>
            )
        }
      }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
