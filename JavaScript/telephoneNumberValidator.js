/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   telephoneNumberValidator.js                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: nprimo <nprimo@student.42lisboa.com>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/02/27 16:09:38 by nprimo            #+#    #+#             */
/*   Updated: 2022/03/09 21:59:06 by nprimo           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function cleanStr(str) {
	let regex = /[-\' \'()]/g
	
	return str.replace(regex, '');
}

function isNumber(str) {
	if (Number(cleanStr(str))) {
		return true;
	}
	return false;
}

function correctLen(str) {
	let cleanedStr = String(cleanStr(str));

	if ((cleanedStr.length === 11 &&
		cleanedStr.charAt(0) === '1') ||
		cleanedStr.length === 10) {
			return true;
	} else {
		return false;
	}
}

function correctUseOfBrackets(str) {
	let trimmedStr = str.replace(/[\' \']/g, '');
	let indexOpen = trimmedStr.indexOf('(');
	let countIndexOpen = str.split('(').length - 1;
	let indexClose = trimmedStr.indexOf(')');
	let countIndexClosed = str.split(')').length - 1;
	
	if (indexOpen === -1 && indexClose === -1) {
		return true;
	} else if (
		(countIndexClosed === 1 && countIndexOpen === 1) &&
		((indexOpen === 0 && indexClose === 4) ||
		(indexOpen === 1 && indexClose == 5))) {
			return true;
	}
	return false;
}

function correctUseOfDash(str) {
	let splitStr = str.replace(/[\' \'()]/g, '').split('-');
	let numDash = splitStr.length - 1;

	if (numDash == 0) {
		return true;
	} else if (numDash == 1 &&
	 	(splitStr[0].length === 6 || splitStr[0].length === 7)) {
		return true;
	} else if (numDash == 2 &&
		(splitStr[0].length === 3 || splitStr[0].length === 4) &&
		splitStr[1].length === 3 &&
		splitStr[2].length === 4) {
		return true;
	}
	return false;
}

function telephoneCheck(str) {
	console.log(correctUseOfDash(str));
	return (isNumber(str) &&
			correctLen(str) &&
			correctUseOfBrackets(str) &&
			correctUseOfDash(str))
}

let tests = [
	"1(555)555-5555",
	"1 (555) 555-5555",
	"(555)555-5555"
]

for (let i = 0; i < tests.length; i++) {
	console.log(tests[i]);
	console.log(`Test: ${telephoneCheck(tests[i])}`);
}
