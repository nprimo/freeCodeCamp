// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   cesarCipher.js                                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: nprimo <marvin@42.fr>                      +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2022/02/23 14:50:29 by nprimo            #+#    #+#             //
//   Updated: 2022/02/23 15:35:17 by nprimo           ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

function rot13(str) {
	let shiftStr = "";
	let charCode;
	let newCharCode;
	let i;

	for (i = 0; i < str.length; i++) {
		if (str[i] >= 'A' && str[i] <= 'Z') {
			charCode = str.charCodeAt(i);
			if (str[i] <= 'M') {
				newCharCode = charCode + 13;
			} else {
				newCharCode = 'A'.charCodeAt(0) + (charCode + 12 - 'Z'.charCodeAt(0));
			}
			shiftStr += String.fromCharCode(newCharCode); 
		} else {
			shiftStr += str[i];
		}
	}
	return (shiftStr);
}
