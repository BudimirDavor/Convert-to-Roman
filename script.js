function convertToRoman() 
{
	var num=Number(document.getElementById("num").value);
	var roman = 
	{
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};
	var str = '';

	for (var i of Object.keys(roman)) 
	{
		var q = Math.floor(num / roman[i]);
		num = num - q * roman[i];
		str = str + i.repeat(q);
	}

	document.getElementById("answer").innerHTML = "That number in roman: "+"<strong>"+str+"</strong>";
}