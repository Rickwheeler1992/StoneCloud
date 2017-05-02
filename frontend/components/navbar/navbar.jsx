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
    $('#playbar')[0].style.display = "none";
    this.props.logout();
  }

  render() {
    if(this.props.currentUser) {
      return(
        <section className="navbar">
          <div id="logo">
            <img src={window.images.logo} onClick={() => hashHistory.push("/tracks")}/>
          </div>
          <Search />
          <div id="athing">
            <Link id="post-link" to="/post"><span id="post-button">Upload</span></Link>
            <div id="user-info">
              <img src={this.props.currentUser.profile_picture_url}/>
              <Link to={`/users/${this.props.currentUser.id}`}>
                <span id="username">{this.props.currentUser.username}</span>
              </Link>
            </div>
            <button id="logout-button" onClick={this.handleLogout}>Log out</button>
          </div>
        </section>
      );
    } else {
      return(
        <div id="homepage">
          <section className="navbar">
            <div id="logo">
              <img src={window.images.logo} onClick={() => hashHistory.push("/tracks")}/>
            </div>
            <Search />

            <ul className="login-or-signup">
              <li><Link to="/login" id="login-link">Sign In</Link></li>
              <li><p>or</p></li>
              <li id="signup-link"><Link to="/signup" id="signup-link-text">Create account</Link></li>
            </ul>
          </section>
          <div className="whitespace">
            <h1>SONGS ON THIS SITE SHOULD BE PLAYED LOUD</h1>
          </div>
        </div>
      );
    }
  }
}

export default Navbar;
