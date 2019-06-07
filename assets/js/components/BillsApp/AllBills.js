import React, { Component } from 'react';

// Class Compontent
export default class AllBills extends Component {
	constructor() {
		super();
		this.state = {};
	}

	clickedBtn = () => {};

	changeToActive = () => {};

	render() {
		return (
			<div id="AllBills">
				<div className="container">
					<div className="total-bills">
						<div className="text">Total Amount:</div>
						<div className="number">$874</div>
					</div>
				</div>
			</div>
		);
	}
}
