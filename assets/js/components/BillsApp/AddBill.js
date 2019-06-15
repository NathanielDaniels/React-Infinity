import React, { Component } from 'react';
import BillsApp from './BillsApp';
import { ECDH } from 'crypto';

// Class Compontent
export default class AllBills extends Component {
	constructor() {
		super();
		this.state = {
			business_name: '',
			amount_due: 0
		};
	}

	inputChange = () => {
		const name = event.target.name;
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;

		this.setState({
			[name]: value
		});
	};

	handleSubmit = () => {
		event.preventDefault();
		this.props.saveBill(this.state);
		console.log(this.state);
	};

	render() {
		return (
			<div
				id="AddBill"
				className={`${this.props.addBillOpen == true ? 'active' : ''}`}
			>
				<div className="container">
					<h2>Add Bill</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="business_name">Business Name</label>
							<input
								type="text"
								id="business_name"
								name="business_name"
								onChange={this.inputChange}
								value={this.state.business_name}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="amount_due">Amount Due</label>
							<input
								type="number"
								id="amount_due"
								name="amount_due"
								step=".01"
								placeholder="$"
								min="0"
								onChange={this.inputChange}
								value={this.state.amount_due}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="add_img">Add Image</label>
							<input
								type="file"
								id="add_img"
								name="add_img"
								onChange={this.inputChange}
								value={this.state.add_img}
							/>
						</div>

						<button type="submit">Save</button>
					</form>
				</div>
			</div>
		);
	}
}
