import React, { Component } from 'react';

//Immutable Arrays
let names = ['Cindy', 'Billy', 'Lisa', 'John'];
let newNames = [...names, 'Ramsey'];
// console.log(names);
// console.log(newNames);

// Class Compontent
export default class Immutable extends Component {
	constructor() {
		super();
		this.state = {
			background: 'black',
			names: ['Cindy', 'Billy', 'Lisa', 'John'],
			teachers: ['Cam', 'Brad', 'Jenna'],
			// both: [],
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
		//Object Spread (Only Use When Changing One Object)
		const newGrade = {
			...this.state.user.grades,
			math: 'A+'
		};
		// Merge Two Arrays
		const addEveryone = {
			Everyone: [...this.state.names, ...this.state.teachers]
		};
		const newUser = Object.assign({}, this.state.user, {
			name: 'Bilbo',
			grades: newGrade
		});

		// // Add Name to End of Array
		// const newNames = {
		// 	names: [...this.state.names, 'Ramsey']
		// };

		// // Remove Name
		// const newNames = {
		// 	names: this.state.names.filter(name => name !== 'Billy')
		// };

		// // Merge Two Arrays
		// const addEveryone = {
		// 	both: [...this.state.names, ...this.state.teachers]
		// };

		console.log(this.state);

		this.setState(
			{
				background: 'green',
				user: newUser,
				newNames,
				both: addEveryone
			},
			() => {
				console.log(this.state);
			}
		);
		// if (this.state.user.name == 'Nate') {
		// 	console.log('Hello, Nate');
		// }
		// if (this.state.user.grades.math == 'A') {
		// 	console.log('you are Math Smart');
		// } else {
		// 	console.log('Get Better At Math');
		// }
		console.log(this.state);
		if (this.state.both[5] == 'Brad') {
			console.log('its Brad alright');
		} else {
			console.log('not brad');
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
