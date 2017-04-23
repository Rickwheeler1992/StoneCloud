import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import Search from './search';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    $('#song')[0].pause();
    $('#playbar')[0].className = "hidden";
    this.props.logout();
  }

  render() {
    if(this.props.currentUser) {
      return(
        <section className="navbar">
          <img src={window.images.logo} onClick={() => hashHistory.push("/tracks")}/>
          <Search />
          <Link id="post-link" to="/post"><span id="post-button">Upload</span></Link>
          <span id="username">{this.props.currentUser.username}</span>
          <button id="logout-button" onClick={this.handleLogout}>Log out</button>
        </section>
      );
    } else {
      return(
        <div id="homepage">
          <section className="navbar">
            <img src={window.images.logo}/>
            <Search />

            <div className="login-or-signup">
              <span><Link to="/login" id="login-link">Sign In</Link></span>
              <p>or</p>
              <span id="signup-link"><Link to="/signup" id="signup-link-text">Create account</Link></span>
            </div>
          </section>
          <div className="whitespace"/>
        </div>
      );
    }
  }
}

export default Navbar;
