import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import List from './List';
class App extends Component {
	constructor() {
		super();
	}
	d() {
		return "33333"
	}
  	render() {
		let o1 = {
			d: '123'
		}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React test123nnn</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<p className="App-intro">
		<List list={[{text:'ddd1', checked: false}, {text:'ddd2', checked: true}]} handleItemChange = {this.handleItemChange.bind('d')}/>
		<input type='button' onClick={this.clickTest.bind('a00', 'b11')} value='1000'/>
		</p>
      </div>
    );
  }
  handleItemChange(a,b) {
	  debugger
	  console.warn(this +' , handleItemChange.... App ... a: ' + a + ', b : ' + b);
	  console.warn('xxxx')
  }
  clickTest(a, b, d) {
	  debugger
	  console.warn('clickTest.....a : ' + a + ' , b: ' + b + ', d : ' + d);
  }
}

export default App;
