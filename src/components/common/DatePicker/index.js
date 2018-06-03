import React, { Component } from 'react';
import { connect } from "react-redux";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { fetchPurchaseTagList } from "../../../Redux/actions/purchase";

import { DateRangePicker } from 'react-dates';
class DateRangePickerController extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: null,
			endDate: null,
			focusedInput: null,
		};
		this.onDatesChange = this.onDatesChange.bind(this)
	}
	onDatesChange(startDate){
		alert(startDate)
	}
	componentDidMount() {
		console.log(this.props.fetchPurchaseTagList());
  	}

	render() {
		return (
			<DateRangePicker
				startDateId="startDate"
				endDateId="endDate"
				startDate={this.state.startDate}
				endDate={this.state.endDate}
				onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
				focusedInput={this.state.focusedInput}
				onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
				/>
		);
	}
}

export default connect(null, {fetchPurchaseTagList})(DateRangePickerController);