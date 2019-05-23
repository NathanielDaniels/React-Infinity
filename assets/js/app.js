import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
		return (
			<div className="container">
				{/* <h1>
					{this.state.name}
					<span>{this.state.age}</span>
				</h1> */}
				{/* <Header1 name={this.state.name} /> */}
				<Header1>
					<b>Nathan</b>
				</Header1>
				<Footer
					name="Billy"
					age={22}
					printName={() => console.log('Hello, My Name is Billy')}
				/>
			</div>
		);
	}
}

// Functional Component (No Access To State)
// Use When Logic is Not Needed
const App2 = () => {
	return (
		<div className="container">
			<h1>Nate</h1>
		</div>
	);
};

const Header1 = props => {
	return <h1>{props.children}</h1>;
};

// Footer
class Footer extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Nathaniel'
		};
	}
	render() {
		return (
			<div className="container">
				<footer onClick={this.props.printName}>
					Name: {this.props.name}, Age: {this.props.age}
				</footer>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#app'));
ReactDOM.render(<App2 />, document.querySelector('#app2'));
