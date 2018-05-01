import moment from 'moment';

export function onlyNumber(input) {
	const regXPattern = /^[0-9\b]+$/;
	return regXPattern.test(input);
}

export function onlyFloatNumber(input) {
	const regXPattern = /^([0-9]+(\.[0-9]+)?)/;
	return regXPattern.test(input);
}

export function dateFormat(date) {
	return moment(date).format("YYYY-MM-DD")+' '+moment(date).format('HH:mm:ss')
}