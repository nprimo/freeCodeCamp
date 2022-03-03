/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   telephoneNumberValidator.js                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: nprimo <nprimo@student.42lisboa.com>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/02/27 16:09:38 by nprimo            #+#    #+#             */
/*   Updated: 2022/03/03 14:18:51 by nprimo           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function cleanStr(str) {
	let regex = /[-\' \'()]/g
	
	return str.replace(regex, '');
}

function correctUseOfBrackets(str) {
	let indexOpen = str.indexOf('(');
	let indexClose = str.indexOf(')');

	if (indexOpen === -1 && indexClose === -1) {
		return true;
	} else if (indexOpen !== -1 && (indexClose - indexOpen) === 4) {
		return correctUseOfBrackets(str.substr(indexClose + 1));
	}
	return false;
}

function correctUseOfDash(str) {
	let splitStr = str.split('-');
	let lastIndex = splitStr.length - 1;

	if ([3, 2].indexOf(splitStr.length) > -1 &&
		splitStr[lastIndex].length === 4 &&
		splitStr[lastIndex - 1].length === 3) {
			if (splitStr.length === 3 &&
				[5, 3].indexOf(splitStr[lastIndex - 2].length) == -1) {
					return false;
				}
			return true;
	} else if (splitStr.length == 1) {
		return true;
	}
	return false;
}

function telephoneCheck(str) {
	let num = Number(cleanStr(str));

	if (correctUseOfBrackets(str) &&
		correctUseOfDash(str) &&
		num &&
		(String(num).length === 10 || String(num).length === 11)) {
		return true;
	}
	return false;
}

let tests = [
	"555-5555",
	"5555555",
	"5555555555",
	"1 555)555-5555",
	"123**&!!asdf#",
	"55555555",
	"(6054756961)",
	"2 (757) 622-7382",
	"0 (757) 622-7382",
	"-1 (757) 622-7382",
	"2 757 622-7382",
	"10 (757) 622-7382",
	"27576227382",
	"(275)76227382",
	"2(757)6227382",
	"2(757)622-7382",
	"555)-555-5555",
	"(555-555-5555",
	"(555)-555-5555",
	"11 555-555-5555",
	"(555)5(55?)-5555",
	"55 55-55-555-5",
]

for (let i = 0; i < tests.length; i++) {
	console.log(tests[i]);
	console.log(`Test: ${telephoneCheck(tests[i])}`);
}
