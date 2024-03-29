import React, { Component } from 'react';
import BillsApp from './BillsApp';

// Class Compontent
export default class AllBills extends Component {
	constructor() {
		super();
		this.state = {};
	}

	showAllBills = () => {
		const bills = this.props.allBills;
		if (bills.length > 0) {
			return bills.map((bill, index) => {
				return (
					<li
						className={`bill ${bill.status == 'paid' ? 'active' : ''}`}
						key={index}
					>
						<div className="company">
							<div className="logo">
								<img src="/img/billsapp/payBill.png" />
								{/* <img>{bill.add_img}</img> */}
							</div>
							<div className="title">{bill.business_name}</div>
						</div>
						<div className="price">-${bill.amount_due}</div>
						<div className="buttons">
							<div
								className="paid"
								onClick={this.props.changeBillStatus.bind(null, index)}
							>
								<i className="fas fa-check-double" />
							</div>
							<div
								className="delete"
								onClick={this.props.deleteBill.bind(null, index)}
							>
								<i className="fas fa-trash-alt" />
							</div>
						</div>
					</li>
				);
			});
		} else {
			return (
				<li className="bill">
					<div className="no-bills">No Bills, Click (+) To Add Bill</div>
				</li>
			);
		}
	};

	billsTotalAmount = () => {
		const bills = this.props.allBills;
		let total = 0;

		for (var i = 0; i < bills.length; i++) {
			total += parseInt(bills[i].amount_due);
		}

		console.log(total);
		if (bills.length > 0) {
			return total;
		} else {
			return 0;
		}
	};

	render() {
		return (
			<div id="AllBills">
				<div className="container">
					<div className="total-bills">
						<div className="text">Total Amount:</div>
						<div className="number">-${this.billsTotalAmount()}</div>
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
