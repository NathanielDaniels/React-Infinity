import React, { Component } from 'react';
import BillsApp from './BillsApp';

// Class Compontent
export default class AllBills extends Component {
	constructor() {
		super();
		this.state = {};
	}

	showAllBills = () => {
		const bills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

		return bills.map(bill => {
			return (
				<li className="bill" key={bill}>
					<div className="company">
						<div className="logo">
							<img src="/img/billsapp/netflix.png" />
						</div>
						<div className="title">Netflix</div>
					</div>
					<div className="price">-$12.99</div>
				</li>
			);
		});
	};

	render() {
		return (
			<div id="AllBills">
				<div className="container">
					<div className="total-bills">
						<div className="text">Total Amount:</div>
						<div className="number">$874</div>
					</div>

					<ul className="bill-list">
						{this.showAllBills()}
						{/* <li className="bill">
							<div className="company">
								<div className="logo">
									<img src="/img/billsapp/netflix.png" />
								</div>
								<div className="title">Netflix</div>
							</div>
							<div className="price">-$12.99</div>
						</li> */}
						{/* <li className="bill">
							<div className="company">
								<div className="logo">
									<img
										className="spotifyHulu"
										src="/img/billsapp/hulu-spotify.png"
									/>
								</div>
								<div className="title">Spotify/hulu</div>
							</div>
							<div className="price">-$9.99</div>
						</li>
						<li className="bill">
							<div className="company">
								<div className="logo">
									<img className="amazon" src="/img/billsapp/amazon.png" />
								</div>
								<div className="title">Amazon Prime</div>
							</div>
							<div className="price">-$12.99</div>
						</li>
						<li className="bill">
							<div className="company">
								<div className="logo">
									<img
										className="codingPhase"
										src="/img/billsapp/codingPhase.png"
									/>
								</div>
								<div className="title">CodingPhase</div>
							</div>
							<div className="price">-$5.00</div>
						</li>
						<li className="bill">
							<div className="company">
								<div className="logo">
									<img
										className="spotifyHulu"
										src="/img/billsapp/laFitness.png"
									/>
								</div>
								<div className="title">LA Fitness</div>
							</div>
							<div className="price">-$54.99</div>
						</li>
						<li className="bill">
							<div className="company">
								<div className="logo">
									<img
										className="spotifyHulu"
										src="/img/billsapp/laFitness.png"
									/>
								</div>
								<div className="title">LA Fitness</div>
							</div>
							<div className="price">-$54.99</div>
						</li> */}
					</ul>
				</div>
			</div>
		);
	}
}
