import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '199654660584-behg6kh464dv7m8mvc986188u4oh670d.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange); //checks if user is signed in and rerenders the component
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get()})
  }
  //updates the status upon changing the status without refreshing the page.

  onSignIn = () => {
    this.auth.signIn();
  }

  onSignOut = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null ) {
      return null
      } else if (this.state.isSignedIn) {
          return (
              <button onClick={this.onSignOut} className="ui red google button">
                <i className="google icon" />
                Sign Out
              </button>
            );
        }   else {
          return (
              <button onClick={this.onSignIn}className="ui red google button">
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

export default GoogleAuth;
