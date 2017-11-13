import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="inner_c">
            <span className="logo"> OlsonKart</span>
            <div className="nav">
              <ul>
                <li>Home</li>
                <li>Account</li>
                <li>Pages</li>
                <li>Computers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="cl"></div>
            <div className="btn">
              <button  className="button">Login</button>
              <button  className = "button"> SignUp </button>
              <button  className = "button"> 3 iems </button>
            </div>
          </div>
        </div>
        <div className="content inner_c">
          <div className="left">
            <h2>Login to Access Amazing Benifits!!!</h2>
            <img src="left.png" alt="" />


          </div>
          <div className="login">
          </div>
        </div>
        <div className="footer">
          <div className="copyright">Copyright 2013 &nbsp;&copy;. Bootstrap Themes</div>
        </div>
      </div>
    );
  }
}

export default App;
