// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   romanNumeralConverter.js                           :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: nprimo <marvin@42.fr>                      +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2022/02/22 23:14:55 by nprimo            #+#    #+#             //
//   Updated: 2022/02/23 00:19:40 by nprimo           ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

function getRomanQuantity(num) 
{
	let romanValue = [1, 5, 10, 50, 100, 500, 1000];
	let romanQuantity = [];
	let i;
  
	for (i = romanValue.length - 1; i >= 0; i--) 
	{
    	romanQuantity.unshift(Math.floor(num / romanValue[i]));
		num -= romanQuantity[0] * romanValue[i];
		if (romanQuantity[0] === 4 && romanQuantity[1] === 1)
		{
			romanQuantity[0] += 5;
			romanQuantity[1] = 0;
		}
	}
	return (romanQuantity);
}

function convertToRoman(num)
{
	let romanNum = "";
	let romanKey = ["I", "V", "X", "L", "C", "D", "M"];
	let	romaQuantity = [];
	let i;
	
	romanQuantity = getRomanQuantity(num);
	for (i = romanKey.length - 1; i >= 0; i--) 
	{
		if (romanQuantity[i] === 4)
		{
			romanNum += romanKey[i];
			romanNum += romanKey[i + 1];
		}
		else if (romanQuantity[i] === 9)
		{
			romanNum += romanKey[i];
			romanNum += romanKey[i + 2];
		}
		else
		{
			romanNum += romanKey[i].repeat(romanQuantity[i]);
		}
	}
	return (romanNum);
}

let testNumbers = [1, 2, 3, 4, 5, 9, 12, 14, 45, 68, 79, 99];
let i = 0;

for (; i < testNumbers.length; i++)
{
	console.log('For number ' + 
		testNumbers[i] + 
		':' + convertToRoman(testNumbers[i]));
	console.log(getRomanQuantity(testNumbers[i]));
}
