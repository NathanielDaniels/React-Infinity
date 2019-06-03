import React, { Component } from 'react';

// Class Compontent
export default class Immutable extends Component {
	constructor() {
		super();
		this.state = {
			background: 'black',
			user: {
				name: 'Nate',
				age: 23,
				location: 'Chicago'
			}
		};
		// console.log(this.state);
	}

	clickedBtn = () => {
		console.log('button clicked');
		const newUser = Object.assign({}, this.state.user, {
			name: 'Bilbo'
		});
		console.log(this.state);
		this.setState(
			{
				background: 'green',
				user: newUser
			},
			() => {
				console.log(this.state);
			}
		);
		if (this.state.user.name == 'Nate') {
			console.log('Hello, Nate');
		}
	};

	changeToActive = () => {
		if (this.state.background == 'green') {
			return 'active';
		} else {
			return '';
		}
	};

	render() {
		return (
			<div id="Immutable-comp">
				<div className={`box ${this.changeToActive()}`} />
				<div className="button" onClick={this.clickedBtn}>
					Press Me
				</div>
			</div>
		);
	}
}
