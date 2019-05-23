import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const users = ['Nathan', 'Billy', 'Susan', 'Smitty'];

// Class Compontent
class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Nathaniel',
			age: 32
		};
	}

	render() {
		return <div className={`container`}>app</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#app'));
ReactDOM.render(<App2 />, document.querySelector('#app2'));

//=====================================================================================
//=====================================================================================

// // Method
// loopUsers = () => {
// 	return users.map((user, index) => {
// 		return <div key={index}>{user}</div>;
// 	});
// };

// showNotification = () => {
// 	if (this.state.age > 18) {
// 		return `You Can Enter The Club`;
// 	} else {
// 		return `You Can NOT Enter The Club`;
// 	}
// };

// render() {
// 	return (
// 		// if age is > 18, create 'active' class. Else create empty string
// 		<div className={`container ${this.state.age > 18 ? 'active' : ''}`}>
// 			{/* <h1>
// 				{this.state.name}
// 				<span>{this.state.age}</span>
// 			</h1> */}
// 			{/* <Header1 name={this.state.name} /> */}
// 			<Header1>
// 				<b>{this.showNotification()}</b>
// 			</Header1>
// 			<b>{this.loopUsers()}</b>
// 			<Footer
// 				name="Billy"
// 				age={22}
// 				printName={() => console.log('Hello, My Name is Billy')}
// 			/>
// 		</div>
// 	);
// }

// // Functional Component (No Access To State)
// // Use When Logic is Not Needed
// const App2 = () => {
// 	return (
// 		<div className="container">
// 			<h1>Nate</h1>
// 		</div>
// 	);
// };

// const Header1 = props => {
// 	return <h1>{props.children}</h1>;
// };

// // Footer
// class Footer extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			name: 'Nathaniel'
// 		};
// 	}
// 	render() {
// 		return (
// 			<div className="container">
// 				<footer onClick={this.props.printName}>
// 					Name: {this.props.name}, Age: {this.props.age}
// 				</footer>
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<App />, document.querySelector('#app'));
// ReactDOM.render(<App2 />, document.querySelector('#app2'));
