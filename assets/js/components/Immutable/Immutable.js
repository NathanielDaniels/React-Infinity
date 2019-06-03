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
				location: 'Chicago',
				grades: {
					math: 'B',
					Science: 'B',
					English: 'A',
					Gym: 'F'
				}
			}
		};
		// console.log(this.state);
	}

	clickedBtn = () => {
		console.log('button clicked');

		//Object Spread (Only Use When Changing One Object)
		const newGrade = {
			...this.state.user.grades,
			math: 'A+'
		};
		const newUser = Object.assign({}, this.state.user, {
			name: 'Bilbo',
			grades: newGrade
		});
		console.log(this.state.user.grades);
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
		if (this.state.user.grades.math == 'A') {
			console.log('you are Math Smart');
		} else {
			console.log('Get Better At Math');
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
