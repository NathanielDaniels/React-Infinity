import React, { Component } from 'react';
import update from 'immutability-helper';

//Immutable Arrays
let names = ['Cindy', 'Billy', 'Lisa', 'John'];
let newNames = [...names, 'Ramsey'];

// Class Compontent
export default class Immutable extends Component {
	constructor() {
		super();
		this.state = {
			background: 'black',
			names: ['Cindy', 'Billy', 'Lisa', 'John'],
			teachers: ['Cam', 'Brad', 'Jenna'],
			user: {
				name: 'Nate',
				age: 32,
				location: 'Chicago',
				grades: {
					math: 'B',
					Science: 'B',
					English: 'A',
					Gym: 'F'
				}
			}
		};
	}

	clickedBtn = () => {
		const changeBgColor = update(this.state.background, {
			$set: 'green'
		});
		console.log(this.state);

		const newGrades = update(this.state.user.grades, {
			$merge: {
				art: 'B-',
				bio: 'D'
			}
		});
		const newState = update(this.state, {
			background: { $set: changeBgColor },
			// background: { $set: 'green' },
			user: {
				grades: { $set: newGrades }
			}
			// background: { $set: 'red' },
			// teachers: {
			// 	$set: ['Billy', 'Jordan']
			// },
			// newUsers: { $set: [...this.state.names, 'Brad', 'Sara'] },
			// user: {
			// 	grades: {
			// 		math: {
			// 			$set: 'A'
			// 		}
			// 	}
			// }
		});

		this.setState(newState, () => {
			console.log(this.state);
		});
	};

	changeToActive = () => {
		if (this.state.user.grades.bio == 'D') {
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
