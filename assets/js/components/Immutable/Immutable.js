import React, { Component } from 'react';
import update from 'immutability-helper';

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
		console.log(this.state);

		const newTeachers = update(this.state.teachers, {
			$splice: [[2]]
		});

		const newState = update(this.state, {
			teachers: {
				$set: newTeachers
			}
		});

		console.log(this.state.teachers);

		this.setState(newState, () => {
			console.log(this.state);
		});
	};

	changeToActive = () => {
		if (this.state.teachers[2] !== 'Jenna') {
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
