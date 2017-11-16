import React, { Component } from 'react';
import './App.css';
import {Row,Col,Button} from 'antd'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Row className="inner_c">
            <Col span={2} ><h1 >OlsonKart</h1></Col>
            <Col span={10} > 
              <div class="nav">
                <ul >
                  <li>Home</li>
                  <li>Account</li>
                  <li>Pages</li>
                  <li>Computers</li>
                  <li>Contact</li>
                </ul>
              </div> 

            </Col>
            <Col span={6}>
            <Button type="primary">Login</Button>
            <Button>SignUp</Button>
            <Button>3Items</Button>
            </Col>
          
          </Row>

        </div>
      </div>
    );
  }
}

export default App;
