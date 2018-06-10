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

export function grossWastageCalc(el, amount) {
	return (((parseFloat(el.grossWeight)*parseFloat(el.wastage))/100)+el.grossWeight)*amount;
}

export function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}