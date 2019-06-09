import React, { Component } from 'react';

// Class Compontent
export default class FloatingMenu extends Component {
	constructor() {
		super();
		this.state = {};
	}

	clickedBtn = () => {};

	changeToActive = () => {};

	render() {
		return (
			<div className="menuContainer">
				<nav id="FloatingMenu">
					<div className="link">
						<div className="icon">
							<i class="far fa-credit-card" />
						</div>
						<div className="text">Spend</div>
					</div>
				</nav>
			</div>
		);
	}
}
