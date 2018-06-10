import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from 'moment';
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
	}
	getRangedDate = (range) => {
		if(range.endDate === null) {
			this.props.getDateVal(moment(range.startDate).format('YYYY-MM-DD'), moment(range.startDate).format('YYYY-MM-DD'));
		} else {
			this.props.getDateVal(moment(range.startDate).format('YYYY-MM-DD'), moment(range.endDate).format('YYYY-MM-DD'));
		}
		this.setState({ startDate:range.startDate, endDate:range.endDate })
	};

	render() {
		return (
			<DateRangePicker
				startDateId="startDate"
				endDateId="endDate"
				isOutsideRange={() => false}
				small
				startDate={this.state.startDate}
				endDate={this.state.endDate}
				onDatesChange={this.getRangedDate}
				focusedInput={this.state.focusedInput}
				onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
				/>
		);
	}
}

export default connect(null, {fetchPurchaseTagList})(DateRangePickerController);