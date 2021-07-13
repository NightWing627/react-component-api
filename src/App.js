import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import CondRender from './CondRender';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "This setState function"
    };
    this.updateSetState = this.updateSetState.bind(this);
    this.forceUpdateState = this.forceUpdateState.bind(this);

    this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this);
    this.findDomNodeHandler2 = this.findDomNodeHandler2.bind(this);
  }

  updateSetState = () => {
    this.setState({msg: "state updated!"});
  };

  forceUpdateState = () => {
    this.forceUpdate();
  };

  findDomNodeHandler1 = () => {
    var myDivOne = document.getElementById("myDivOne");
    
    ReactDOM.findDOMNode(myDivOne).style.color = 'red';
  }
  
  findDomNodeHandler2 = () => {
    var myDivTwo = document.getElementById('myDivTwo');
    ReactDOM.findDOMNode(myDivTwo).style.color = 'blue';
  }

  render() {
    return (
      <div>
        <h1>This Component API TEST</h1>
        <div>
          <h1>
            {this.state.msg} <br />
            <button onClick={this.updateSetState}>SET STATE</button>
          </h1>
        </div><hr />
        <div>
          <h1>Example to generate random number</h1>
          <h1>Random number: {Math.random()}</h1>
          <br />
          <button onClick={this.forceUpdateState}>ForceUp</button>
        </div><hr />
        <div>
          <h1>ReactJS Find DOM NODE Example</h1>
          <button onClick={this.findDomNodeHandler1}>FIND_DOM_NODE1</button>
          <button onClick={this.findDomNodeHandler2}>FIND_DOM_NODE2</button>
          <h3 id="myDivOne">JTP-NODE1</h3>
          <h3 id="myDivTwo">JTP-NODE2</h3>
        </div><hr />
        <div>
          <h1>This is Conditional Render Sample</h1>
          <CondRender />
        </div><hr />
      </div>
      
    );
  }
}

export default App;